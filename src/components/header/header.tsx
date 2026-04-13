import { HeaderProps } from '@/src/interfaces/index';
import { useRouter } from 'expo-router';
import { ChevronLeftIcon } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import Search from '../search/search';
import { Box } from '../ui/box';

export default function Header({
  title,
  subtitle,
  placeholder,
  setSearchQuery,
  searchQuery,
  isDetails,
}: HeaderProps) {
  const router = useRouter();

  if (isDetails) {
    return (
      <View className="bg-white rounded-b-[2rem]">
        <View className="pl-4 pt-16 pb-6 rounded-b-[2rem] shadow-sm flex-row gap-5 items-center">
          <Pressable onPress={() => router.back()}>
            <ChevronLeftIcon size={24} color="#000" />
          </Pressable>
          <View className="flex gap-2">
            <Text className="text-2xl font-extrabold ">{title}</Text>
            <Text className="text-xl text-gray-500 font-medium ml-1 mb-2">{subtitle}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <Box className="flex justify-between mb-4 gap-3">
      <View>
        <Text className="font-extrabold text-3xl">{title}</Text>
        <Text className="text-xl font-medium text-gray-600">{subtitle}</Text>
      </View>
      {setSearchQuery && searchQuery !== undefined && (
        <Search
          placeholder={placeholder ?? 'Pesquisar...'}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
      )}
    </Box>
  );
}
