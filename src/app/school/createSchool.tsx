import HeaderDetails from '@/src/components/headerDetails/headerDetails';
import SchoolForm from '@/src/features/schools/components/schoolForm/schoolForm';
import { View } from 'react-native';

export default function CreateSchool() {
  return (
    <View className="flex-1 bg-[#fff] pb-4">
      <HeaderDetails title="Cadastrar nova escola" subtitle="Adicione uma nova instituição" />
      <SchoolForm />
    </View>
  );
}
