import { Box } from '@/src/components/ui/box';
import { Card } from '@/src/components/ui/card';
import { Heading } from '@/src/components/ui/heading';
import { Text } from '@/src/components/ui/text';
import { ListItemsProps, School, SchoolClass } from '@/src/interfaces/index';
import { router } from 'expo-router';
import { ChevronRightIcon, PackageIcon } from 'lucide-react-native';
import { FlatList, Pressable, View } from 'react-native';
// import DeleteButton from '../deleteButton/deleteButton';
// import EditButton from '../editButton/editButton';
import { badgeColorMap, colorMap, colors } from '@/src/constants/constants';
import CardContent from '../cardContent/cardContent';
import { Divider } from '../ui/divider';
import { VStack } from '../ui/vstack';

export default function ListItems({ data, type, handleEdit, handleDelete }: ListItemsProps) {
  const renderItem = ({ item, index }: { item: School | SchoolClass; index: number }) => {
    const isSchool = type === 'school';

    const selectedColor = colors[index % colors.length] as keyof typeof colorMap;

    return (
      <Pressable>
        <Card size="md" variant="elevated" className="m-3 bg-white">
          <View
            className={`absolute left-0 top-4 bottom-4 w-1.5 rounded-r-full ${colorMap[selectedColor]}`}
          />
          <VStack space="xs">
            <Heading size="xl" className="font-extrabold mb-1">
              {item.name}
            </Heading>
            <View className="flex-row justify-between">
              {isSchool ? (
                <CardContent
                  type={type}
                  subtitle={(item as School)?.address}
                  qtdClasses={(item as School)?.classes.length}
                  selectedColor={selectedColor}
                />
              ) : (
                <View className="gap-2">
                  <View className="flex flex-row justify-between">
                    <Text size="lg" className="font-bold">
                      {(item as SchoolClass)?.name}
                    </Text>
                  </View>
                  <View
                    className={`max-w-32 flex-row items-center align-middle text-sm mb-3 gap-1 ${badgeColorMap[selectedColor]} p-1 rounded-md `}
                  >
                    <PackageIcon className="mr-1.5" color="#6B7280" size={15} />
                    <Text size="md" className="font-bold">
                      {(item as SchoolClass)?.schoolId}
                    </Text>
                  </View>
                </View>
              )}
              <View className="flex-row justify-end gap-2 h-10 items-center">
                <View className="flex-row">
                  {/* <EditButton item={item} handleEdit={handleEdit} />
                  <DeleteButton name={item.name} id={item.id} handleDelete={handleDelete} /> */}
                </View>
                <Divider orientation="vertical" />
                <Pressable
                  onPress={() => {
                    router.push({
                      pathname: '/(tabs)/schools',
                      params: {
                        id: item.id,
                        name: item.name,
                        address: (item as School).address,
                        products: JSON.stringify((item as School).classes),
                        storeId: String((item as SchoolClass).schoolId),
                      },
                    });
                  }}
                >
                  <ChevronRightIcon size={20} color="#6B7280" />
                </Pressable>
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
