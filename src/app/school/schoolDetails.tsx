import FloatingBtn from '@/src/components/floatingBtn/floatingBtn';
import HeaderDetails from '@/src/components/headerDetails/headerDetails';
import { Heading } from '@/src/components/ui/heading/index';
import { Text } from '@/src/components/ui/text/index';
import { useSchoolStore } from '@/src/features/schools/store/useSchoolStore';
import { useLocalSearchParams } from 'expo-router';
import { GraduationCap } from 'lucide-react-native';
import { View } from 'react-native';

export default function SchoolDetails() {
  const params = useLocalSearchParams<{
    id: string;
  }>();

  const { getSchoolById } = useSchoolStore();

  const currentSchool = getSchoolById(params.id);

  if (currentSchool) {
    return (
      <View className="flex-1 bg-[#F5F5F0]">
        <HeaderDetails title={currentSchool.name} subtitle={currentSchool.address} />
        <View className="flex-1  px-6 pt-6">
          {currentSchool.classes.length ? (
            <View>
              <View className="flex-row items-center mb-4 gap-2">
                <GraduationCap size={20} color="#818cf8" />
                <Heading size="md">Turmas ({currentSchool.classes.length})</Heading>
              </View>
            </View>
          ) : (
            <View>
              <Text className="text-center p-10 text-xl m-auto">
                Essa escola ainda não possui turmas cadastradas
              </Text>
            </View>
          )}
        </View>
        <FloatingBtn route="/classes/createClass" />
      </View>
    );
  }
}
