import Header from '@/src/components/header/header';
import SchoolForm from '@/src/features/schools/components/schoolForm/schoolForm';
import { useSchoolStore } from '@/src/features/schools/store/useSchoolStore';
import { FormDataSchool } from '@/src/interfaces';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function CreateSchool() {
  const router = useRouter();
  const { addSchool } = useSchoolStore();

  const handleCreate = async (data: FormDataSchool) => {
    await addSchool({
      ...data,
      numClasses: 0,
      classes: [],
    });
    router.back();
  };

  return (
    <View className="flex-1 bg-[#fff] pb-4">
      <Header
        title="Cadastrar nova escola"
        subtitle="Adicione uma nova instituição"
        isDetails={true}
      />
      <SchoolForm onSubmit={handleCreate} />
    </View>
  );
}
