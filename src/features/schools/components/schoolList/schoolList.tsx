import { Box } from '@/src/components/ui/box';
import { Card } from '@/src/components/ui/card';
import { Heading } from '@/src/components/ui/heading';
import { Text } from '@/src/components/ui/text';
import { VStack } from '@/src/components/ui/vstack';
import { colorMap, colors } from '@/src/constants/constants';
import { ListSchoolProps, School } from '@/src/interfaces/index';
import { router } from 'expo-router';
import { ChevronRightIcon } from 'lucide-react-native';
import { FlatList, Pressable, View } from 'react-native';
import BtnDeleteSchool from '../btnDeleteSchool/btnDeleteSchool';
import BtnEditSchool from '../btnEditSchool/btnEditSchool';
import SchoolCardContent from '../schoolCardContent/schoolCardContent';

export default function SchoolList({ data, handleEdit, handleDelete }: ListSchoolProps) {
  const renderItem = ({ item, index }: { item: School; index: number }) => {
    const selectedColor = colors[index % colors.length] as keyof typeof colorMap;

    return (
      <Pressable
        onPress={() => {
          router.push({
            pathname: '/school/schoolDetails',
            params: {
              id: item.id,
              name: item.name,
              address: item.address,
              classes: JSON.stringify(item.classes),
            },
          });
        }}
      >
        <Card size="md" variant="elevated" className="m-3 bg-white">
          <View
            className={`absolute left-0 top-4 bottom-4 w-1.5 rounded-r-full ${colorMap[selectedColor]}`}
          />
          <VStack space="xs">
            <Heading size="xl" className="font-extrabold mb-1">
              {item.name}
            </Heading>
            <View className="flex-row justify-between">
              <SchoolCardContent
                address={item.address}
                qtdClasses={item.classes.length}
                selectedColor={selectedColor}
              />
              <View className="flex-row justify-end gap-3 h-10 items-center">
                <View className="flex-row ">
                  <BtnEditSchool item={item} />
                  <BtnDeleteSchool id={item.id} />
                </View>
                <ChevronRightIcon size={20} color="#6B7280" />
              </View>
            </View>
          </VStack>
        </Card>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: 50, flexGrow: 1 }}
      ListEmptyComponent={() => (
        <Box className="items-center p-10">
          <Text>Nenhum item encontrado.</Text>
        </Box>
      )}
      className="flex-1"
    />
  );
}
