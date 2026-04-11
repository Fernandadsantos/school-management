import Header from '@/src/components/header/header';
import ListItems from '@/src/components/listItems/listItems';
import { Skeleton, SkeletonText } from '@/src/components/ui/skeleton';
import { skeletonArr } from '@/src/constants/constants';
import { useSchoolStore } from '@/src/features/schools/store/useSchoolStore';
import { useFilteredSchools } from '@/src/hooks/useFilteredTerm';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function Schools() {
  const { fetchSchools, isLoading, setSearchQuery, editSchool, deleteSchool, searchQuery } =
    useSchoolStore();
  const filteredSchools = useFilteredSchools();

  useEffect(() => {
    fetchSchools();
  }, []);

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
        <View>
          <SkeletonText _lines={1} className=" m-4 h-4 w-3/5" />
          {skeletonArr.map((_, index) => (
            <View className="justify-center p-3 rounded-md" key={index}>
              <Skeleton variant="rounded" speed={3} className="h-[120px]" />
            </View>
          ))}
        </View>
      ) : (
        <View className="flex-1 p-3 pb-0">
          <Text className="p-5 font-bold text-lg">TODAS AS ESCOLAS ({filteredSchools.length})</Text>
          <ListItems
            handleDelete={deleteSchool}
            handleEdit={editSchool}
            data={filteredSchools}
            type="school"
          />
        </View>
      )}
    </View>
  );
}
