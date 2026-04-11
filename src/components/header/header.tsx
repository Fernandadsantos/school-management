import { HeaderProps } from '@/src/interfaces/index';
import { Text, View } from 'react-native';
import Search from '../search/search';
import { Box } from '../ui/box';

export default function Header({
  title,
  subtitle,
  placeholder,
  setSearchQuery,
  searchQuery,
}: HeaderProps) {
  return (
    <Box className="flex justify-between mb-4 gap-3">
      <View>
        <Text className="font-extrabold text-3xl">{title}</Text>
        <Text className="text-lg text-gray-600">{subtitle}</Text>
      </View>
      <Search placeholder={placeholder} setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
    </Box>
  );
}
