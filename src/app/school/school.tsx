import CustomSkeleton from '@/src/components/customSkeleton/customSkeleton';
import FloatingBtn from '@/src/components/floatingBtn/floatingBtn';
import Header from '@/src/components/header/header';
import { useClassStore } from '@/src/features/classes/store/useClassesStore';
import SchoolList from '@/src/features/schools/components/schoolList/schoolList';
import { useFilteredSchools } from '@/src/features/schools/hooks/useFilteredSchools';
import { useSchoolStore } from '@/src/features/schools/store/useSchoolStore';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function School() {
  const {
    fetchSchools,
    isLoading,
    setSearchQuery,
    editSchool,
    deleteSchool,
    searchQuery,
    schools,
  } = useSchoolStore();
  const { classes } = useClassStore();

  const filteredSchools = useFilteredSchools();

  useEffect(() => {
    fetchSchools();
  }, [classes]);

  return (
    <View className="flex-1 bg-[#F5F5F0] pb-4">
      <View className="px-6 pt-14 pb-6 bg-white rounded-b-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative z-10">
        <Header
          title={'Escolas'}
          subtitle={'Gerencie suas instituições'}
          placeholder={'Procure por escolas ou endereços'}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
      </View>
      {isLoading ? (
        <CustomSkeleton />
      ) : (
        <View className="flex-1 p-3 pb-0">
          <Text className="p-5 font-bold text-lg">TODAS AS ESCOLAS ({filteredSchools.length})</Text>
          <SchoolList handleDelete={deleteSchool} handleEdit={editSchool} data={filteredSchools} />
        </View>
      )}
      <FloatingBtn route="/school/createSchool" />
    </View>
  );
}
