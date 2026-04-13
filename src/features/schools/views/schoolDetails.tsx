import FloatingBtn from '@/src/components/floatingBtn/floatingBtn';
import Header from '@/src/components/header/header';
import { Heading } from '@/src/components/ui/heading/index';
import { Text } from '@/src/components/ui/text/index';
import ClassList from '@/src/features/classes/components/classList/classList';
import { useSchoolStore } from '@/src/features/schools/store/useSchoolStore';
import { useLocalSearchParams } from 'expo-router';
import { GraduationCap } from 'lucide-react-native';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function SchoolDetails() {
  const { fetchSchools } = useSchoolStore();
  const params = useLocalSearchParams<{ id: string }>();

  const currentSchool = useSchoolStore((state) => state.schools.find((s) => s.id === params.id));

  useEffect(() => {
    fetchSchools();
  }, []);

  if (currentSchool) {
    return (
      <View className="flex-1 bg-[#F5F5F0]">
        <Header title={currentSchool.name} subtitle={currentSchool.address} isDetails={true} />
        <View className="flex-1  px-6 pt-6">
          {currentSchool.classes ? (
            <View className="flex-1">
              <View className="flex-row items-center mb-4 gap-2">
                <GraduationCap size={20} color="#818cf8" />
                <Heading size="md">Turmas ({currentSchool.classes.length})</Heading>
              </View>
              <ClassList data={currentSchool.classes} />
            </View>
          ) : (
            <View className="m-auto">
              <Text className="text-center p-10 text-xl m-auto">
                Essa escola ainda não possui turmas cadastradas
              </Text>
            </View>
          )}
        </View>
        <FloatingBtn route={`/class/createClassScreen?schoolId=${currentSchool.id}`} />
      </View>
    );
  }
}
