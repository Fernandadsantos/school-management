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
