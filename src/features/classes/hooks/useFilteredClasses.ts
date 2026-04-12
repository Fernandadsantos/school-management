import { useClassStore } from '@/src/features/classes/store/useClassesStore';

export const useFilteredClasses = () => {
  const classes = useClassStore((state) => state.classes);
  const searchQuery = useClassStore((state) => state.searchQuery);

  const filteredClasses = classes.filter((schoolClass) => {
    const lowerQuery = searchQuery.toLowerCase();
    return (
      schoolClass?.name?.toLowerCase().includes(lowerQuery) ||
      schoolClass?.classShift?.toLowerCase().includes(lowerQuery) ||
      schoolClass?.year?.toString().includes(lowerQuery)
    );
  });

  return filteredClasses;
};
