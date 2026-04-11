import { ClassesState } from "@/src/interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useClassStore = create<ClassesState>()(
  persist(
    (set) => ({
      classes: [],
      addClass: (schoolClass) =>
        set((state) => ({
          classes: [...state.classes, schoolClass],
        })),
    }),
    {
      name: "class-manager-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
