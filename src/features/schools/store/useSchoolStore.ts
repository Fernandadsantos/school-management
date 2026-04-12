import { SchoolState } from '@/src/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { useClassStore } from '../../classes/store/useClassesStore';

export const useSchoolStore = create<SchoolState>()(
  persist(
    (set, get) => ({
      schools: [],
      searchQuery: '',
      isLoading: false,

      setSearchQuery: (query: string) => set({ searchQuery: query }),

      fetchSchools: async () => {
        set({ isLoading: true });
        try {
          const response = await fetch('api/schools');

          if (!response.ok) {
            const text = await response.text();
            console.error('Resposta não é JSON:', text);
            return;
          }

          const data = await response.json();
          set({ schools: data.schools });
        } catch (error) {
          console.error('Erro ao buscar escolas:', error);
        } finally {
          set({ isLoading: false });
        }
      },

      getSchoolById: (id: string) => {
        const { schools } = get();

        return schools.find((e) => e.id === id);
      },

      addSchool: async (school) => {
        set({ isLoading: true });
        try {
          const response = await fetch('api/schools', {
            method: 'POST',
            body: JSON.stringify(school),
          });
          const { school: newSchool } = await response.json();

          set((state) => ({
            schools: [...state.schools, newSchool],
          }));
        } catch (error) {
          console.error('Erro ao adicionar escola:', error);
        } finally {
          set({ isLoading: false });
        }
      },

      editSchool: async (id, updatedFields) => {
        set({ isLoading: true });
        try {
          const response = await fetch(`api/schools/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedFields),
          });
          const { school: updatedSchool } = await response.json();

          set((state) => ({
            schools: state.schools.map((s) => (s.id === id ? updatedSchool : s)),
          }));
        } catch (error) {
          console.error('Erro ao editar escola:', error);
        } finally {
          set({ isLoading: false });
        }
      },

      deleteSchool: async (id) => {
        set({ isLoading: true });
        try {
          await fetch(`api/schools/${id}`, { method: 'DELETE' });

          set((state) => ({
            schools: state.schools.filter((s) => String(s.id) !== String(id)),
          }));

          useClassStore.setState((state) => {
            const updatedClasses = state.classes.filter((c) => String(c.schoolId) !== String(id));

            return { ...state, classes: updatedClasses };
          });
        } catch (error) {
          console.error('Erro ao excluir escola:', error);
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'school-manager-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ schools: state.schools }),
    },
  ),
);
