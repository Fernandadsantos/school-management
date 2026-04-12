import { Pressable } from '@/src/components/ui/pressable';
import { HeaderDetailsProps } from '@/src/interfaces';
import { useRouter } from 'expo-router';
import { ChevronLeftIcon } from 'lucide-react-native';
import { Text, View } from 'react-native';

export default function HeaderDetails({ title, subtitle }: HeaderDetailsProps) {
  const router = useRouter();

  return (
    <View className="bg-white rounded-b-[2rem]">
      <View className="pl-4 pt-16 pb-6 rounded-b-[2rem] shadow-sm flex-row gap-5 items-center">
        <Pressable onPress={() => router.back()}>
          <ChevronLeftIcon size={24} color="#000" />
        </Pressable>
        <View className="flex gap-2">
          <Text className="text-2xl font-extrabold ">{title}</Text>
          <Text className="text-xl text-gray-500 font-normal ml-1 mb-2">{subtitle}</Text>
        </View>
      </View>
    </View>
  );
}
