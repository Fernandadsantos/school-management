import { SchoolState } from "@/src/interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useSchoolStore = create<SchoolState>()(
  persist(
    (set) => ({
      schools: [],
      addSchool: (school) =>
        set((state) => ({
          schools: [...state.schools, school],
        })),
    }),
    {
      name: "school-manager-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
