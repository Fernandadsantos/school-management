import { useClassStore } from '@/src/features/classes/store/useClassesStore';
import { useSchoolStore } from '@/src/features/schools/store/useSchoolStore';

export const useFilteredSchools = () => {
  const schools = useSchoolStore((state) => state.schools);
  const searchQuery = useSchoolStore((state) => state.searchQuery);

  const filteredSchools = schools.filter((school) => {
    const lowerQuery = searchQuery.toLowerCase();
    return (
      school?.name?.toLowerCase().includes(lowerQuery) ||
      school?.address?.toLowerCase().includes(lowerQuery)
    );
  });

  return filteredSchools;
};

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
