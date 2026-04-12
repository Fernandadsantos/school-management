import { ClassesState } from '@/src/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useClassStore = create<ClassesState>()(
  persist(
    (set, get) => ({
      classes: [],
      isLoading: false,
      searchQuery: '',

      setSearchQuery: (query: string) => set({ searchQuery: query }),

      fetchClasses: async () => {
        set({ isLoading: true });
        try {
          const response = await fetch('api/classes');
          if (!response.ok) return;

          const data = await response.json();
          set({ classes: data.classes });
        } catch (error) {
          console.error('Erro ao buscar turmas:', error);
        } finally {
          set({ isLoading: false });
        }
      },

      getClassesBySchoolId: (schoolId: string) => {
        return get().classes.filter((c) => c.schoolId === schoolId);
      },

      addClass: async (schoolClass) => {
        set({ isLoading: true });
        try {
          const response = await fetch('api/classes', {
            method: 'POST',
            body: JSON.stringify(schoolClass),
          });
          const { class: newClass } = await response.json();

          set((state) => ({
            classes: [...state.classes, newClass],
          }));
        } catch (error) {
          console.error('Erro ao adicionar turma:', error);
        } finally {
          set({ isLoading: false });
        }
      },

      editClass: async (id, updatedFields) => {
        set({ isLoading: true });
        try {
          const response = await fetch(`api/classes/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedFields),
          });
          const { class: updatedClass } = await response.json();

          set((state) => ({
            classes: state.classes.map((c) => (c.id === id ? updatedClass : c)),
          }));
        } catch (error) {
          console.error('Erro ao editar turma:', error);
        } finally {
          set({ isLoading: false });
        }
      },

      deleteClass: async (id) => {
        set({ isLoading: true });
        try {
          await fetch(`api/classes/${id}`, { method: 'DELETE' });

          set((state) => ({
            classes: state.classes.filter((c) => c.id !== id),
          }));
        } catch (error) {
          console.error('Erro ao excluir turma:', error);
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'class-manager-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ classes: state.classes }),
    },
  ),
);
