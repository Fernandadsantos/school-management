import BtnSubmit from '@/src/components/btnSubmit/btnSubmit';
import { Input, InputField } from '@/src/components/ui/input';
import { FormDataSchool, SchoolFormProps } from '@/src/interfaces';
import { HousePlusIcon, MapPinIcon } from 'lucide-react-native';
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

export default function SchoolForm({ initialData, onSubmit }: SchoolFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormDataSchool>({
    defaultValues: {
      name: initialData?.name || '',
      address: initialData?.address || '',
    },
    mode: 'onChange',
  });

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 gap-4 m-5">
        <View className="mb-3">
          <View className="flex-row mb-2 items-center">
            <HousePlusIcon size={20} color="#818cf8" />
            <Text className="text-lg font-bold mb-1 ml-1 text-gray-950">Nome da Escola</Text>
          </View>
          <Controller
            control={control}
            name="name"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input variant="rounded" size="lg" className="bg-gray-100">
                <InputField
                  value={value}
                  onChangeText={onChange}
                  placeholder="Ex: Escola Estadual Silveira"
                />
              </Input>
            )}
          />
        </View>

        <View className="mb-3">
          <View className="flex-row mb-2 items-center">
            <MapPinIcon size={20} color="#818cf8" />
            <Text className="text-lg font-bold mb-1 ml-1 text-gray-950">Endereço</Text>
          </View>
          <Controller
            control={control}
            name="address"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input variant="rounded" size="lg" className="bg-gray-100">
                <InputField
                  value={value}
                  onChangeText={onChange}
                  placeholder="Rua, Número, Bairro"
                />
              </Input>
            )}
          />
        </View>
      </View>

      <BtnSubmit
        isValid={isValid}
        btnTitle={initialData ? 'Salvar Alterações' : 'Cadastrar Escola'}
        handleCreate={(setIsLoading) =>
          handleSubmit(async (data) => {
            setIsLoading(true);
            try {
              await onSubmit(data);
            } finally {
              setIsLoading(false);
            }
          })()
        }
      />
    </View>
  );
}
