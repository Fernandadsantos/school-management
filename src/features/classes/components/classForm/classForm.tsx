import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '@/src/components/ui/select';
import { ClassFormProps, FormDataClass } from '@/src/interfaces';
import { Calendar, ChevronDownIcon, Clock, GraduationCap } from 'lucide-react-native';
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import BtnSubmit from '@/src/components/btnSubmit/btnSubmit';
import { Input, InputField } from '@/src/components/ui/input';

export default function ClassForm({ initialData, onSubmit }: ClassFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormDataClass>({
    defaultValues: {
      name: initialData?.name || '',
      classShift: initialData?.classShift || 'matutino',
      year: initialData?.year || new Date().getFullYear(),
    },
    mode: 'onChange',
  });

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 gap-4 m-5">
        <View className="mb-3">
          <View className="flex-row mb-2">
            <GraduationCap size={20} color="#818cf8" />
            <Text className="text-lg font-bold mb-1 ml-1 text-gray-950">Nome da Turma</Text>
          </View>
          <Controller
            control={control}
            name="name"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input variant="rounded" size="lg" className="bg-gray-100">
                <InputField value={value} onChangeText={onChange} placeholder="Ex: 3º Ano B" />
              </Input>
            )}
          />
        </View>

        <View className="mb-3">
          <View className="flex-row mb-2 items-center">
            <Clock size={20} color="#818cf8" />
            <Text className="text-lg font-bold mb-1 ml-1 text-gray-950">Turno</Text>
          </View>

          <Controller
            control={control}
            name="classShift"
            rules={{ required: 'Selecione um turno' }}
            render={({ field: { onChange, value } }) => (
              <Select onValueChange={onChange} selectedValue={value}>
                <SelectTrigger variant="rounded" size="lg" className="bg-gray-100">
                  <SelectInput placeholder="Selecione o turno" />
                  <SelectIcon className="mr-3">
                    <ChevronDownIcon size={18} color="#6B7280" />
                  </SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="Matutino" value="matutino" />
                    <SelectItem label="Vespertino" value="vespertino" />
                    <SelectItem label="Noturno" value="noturno" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            )}
          />
        </View>

        <View className="mb-3">
          <View className="flex-row mb-2">
            <Calendar size={20} color="#818cf8" />
            <Text className="text-lg font-bold mb-1 ml-1 text-gray-950">Ano Letivo</Text>
          </View>
          <Controller
            control={control}
            name="year"
            render={({ field: { onChange, value } }) => (
              <Input variant="rounded" size="lg" className="bg-gray-100">
                <InputField
                  value={value.toString()}
                  onChangeText={(text) => onChange(Number(text))}
                  keyboardType="numeric"
                />
              </Input>
            )}
          />
        </View>
      </View>

      <BtnSubmit
        isValid={isValid}
        btnTitle={initialData ? 'Salvar Alterações' : 'Cadastrar Turma'}
        handleCreate={(setIsLoading) =>
          handleSubmit(async (data) => {
            setIsLoading(true);
            await onSubmit(data);
            setIsLoading(false);
          })()
        }
      />
    </View>
  );
}
