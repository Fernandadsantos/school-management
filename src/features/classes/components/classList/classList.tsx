import { Box } from '@/src/components/ui/box';
import { Card } from '@/src/components/ui/card';
import { Heading } from '@/src/components/ui/heading';
import { Text } from '@/src/components/ui/text';
import { VStack } from '@/src/components/ui/vstack';
import { colorMap, colors } from '@/src/constants/constants';
import { ListClassProps, SchoolClass } from '@/src/interfaces/index';
import { FlatList, View } from 'react-native';
import BtnDeleteClass from '../btnDeleteClass/btnDeleteClass';
import BtnEditClass from '../btnEditClass/btnEditClass';
import ClassCardContent from '../classCardContent/classCardContent';

export default function ClassList({ data }: ListClassProps) {
  const renderItem = ({ item, index }: { item: SchoolClass; index: number }) => {
    const selectedColor = colors[index % colors.length] as keyof typeof colorMap;

    return (
      <View>
        <Card size="md" variant="elevated" className="m-3 bg-white">
          <View
            className={`absolute left-0 top-4 bottom-4 w-1.5 rounded-r-full ${colorMap[selectedColor]}`}
          />
          <VStack space="xs" className="pl-3">
            <Heading size="xl" className="font-extrabold mb-1">
              {item.name} - {item.year}
            </Heading>
            <View className="flex-row justify-between">
              <ClassCardContent shift={item.classShift} selectedColor={selectedColor} />
              <View className="flex-row justify-end gap-3 h-10 items-center">
                <View className="flex-row ">
                  <BtnEditClass item={item} />
                  <BtnDeleteClass id={item.id} />
                </View>
              </View>
            </View>
          </VStack>
        </Card>
      </View>
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
