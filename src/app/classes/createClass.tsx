import Header from '@/src/components/header/header';
import ClassForm from '@/src/features/classes/components/classForm/classForm';
import { useClassStore } from '@/src/features/classes/store/useClassesStore';
import { FormDataClass } from '@/src/interfaces';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { View } from 'react-native';

export default function CreateSchool() {
  const router = useRouter();
  const { addClass } = useClassStore();
  const { schoolId } = useLocalSearchParams<{ schoolId: string }>();

  const handleCreate = async (data: FormDataClass) => {
    await addClass({ ...data, schoolId: schoolId });
    router.back();
  };

  return (
    <View className="flex-1 bg-[#fff] pb-4">
      <Header
        title="Cadastrar nova turma"
        subtitle="Adicione uma nova turma no sistema"
        isDetails={true}
      />
      <ClassForm onSubmit={handleCreate} />
    </View>
  );
}
