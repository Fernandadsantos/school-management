// import HeaderDetails from '@/src/components/headerDetails/headerDetails';
import BtnSubmit from '@/src/components/btnSubmit/btnSubmit';
import { Input, InputField } from '@/src/components/ui/input';
import { FormDataSchool } from '@/src/interfaces';
import { useRouter } from 'expo-router';
import { HousePlusIcon, MapPinIcon } from 'lucide-react-native';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Animated, Text, View } from 'react-native';
import { useSchoolStore } from '../../store/useSchoolStore';

export default function SchoolForm() {
  const spinValue = useRef(new Animated.Value(0)).current;
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = name.trim().length > 0 && address.trim().length > 0;

  const { addSchool } = useSchoolStore();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormDataSchool>({
    defaultValues: {
      name: '',
      address: '',
    },
    mode: 'onChange',
  });

  const handleCreate = async (
    data: FormDataSchool,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setIsLoading(true);

    try {
      await addSchool({
        name,
        address,
        numClasses: 0,
        classes: [],
      });

      router.replace('/(tabs)/schools');
    } catch (error) {
      console.error('Erro ao criar escola:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 gap-4  m-5">
        <View className="mb-3">
          <View className="flex-row mb-2">
            <HousePlusIcon size={20} color="#818cf8" />
            <Text className="text-lg font-bold mb-1 ml-1 text-gray-950">Nome da Escola</Text>
          </View>
          <Input isRequired variant="rounded" size="lg" className="bg-gray-100">
            <InputField
              value={name}
              onChangeText={setName}
              placeholder="Ex: Escola Estadual Silveira"
            />
          </Input>
        </View>

        <View className="mb-3">
          <View className="flex-row mb-2">
            <MapPinIcon size={20} color="#818cf8" />
            <Text className="text-lg font-bold mb-1 ml-1 text-gray-950">Endereço</Text>
          </View>
          <Input isRequired variant="rounded" size="lg" className="bg-gray-100">
            <InputField
              value={address}
              onChangeText={setAddress}
              placeholder="Rua, Número, Bairro"
            />
          </Input>
        </View>
      </View>
      <BtnSubmit
        isValid={isFormValid}
        btnTitle="Cadastrar Escola"
        handleCreate={(setIsLoading) => handleSubmit((data) => handleCreate(data, setIsLoading))()}
      />
    </View>
  );
}
