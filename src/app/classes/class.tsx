import CustomSkeleton from '@/src/components/customSkeleton/customSkeleton';
import Header from '@/src/components/header/header';
import ClassList from '@/src/features/classes/components/classList/classList';
import { useFilteredClasses } from '@/src/features/classes/hooks/useFilteredClasses';
import { useClassStore } from '@/src/features/classes/store/useClassesStore';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function Class() {
  const { fetchClasses, isLoading, setSearchQuery, searchQuery } = useClassStore();
  const filteredSchoolClasses = useFilteredClasses();

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <View className="flex-1 bg-[#F5F5F0] pb-4">
      <View className="px-6 pt-14 pb-6 bg-white rounded-b-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative z-10">
        <Header
          title="Turma"
          subtitle="Gerencie suas turmas"
          placeholder={'Procure por turmas'}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
      </View>
      {isLoading ? (
        <CustomSkeleton />
      ) : (
        <View className="flex-1 p-3 pb-0">
          <Text className="p-5 font-bold text-lg">
            TODAS AS TURMAS ({filteredSchoolClasses.length})
          </Text>
          <ClassList data={filteredSchoolClasses} />
        </View>
      )}
    </View>
  );
}
