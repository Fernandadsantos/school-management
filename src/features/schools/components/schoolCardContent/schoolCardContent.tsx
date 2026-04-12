import { Text } from '@/src/components/ui/text';
import { badgeColorMap } from '@/src/constants/constants';
import { SchoolCardContentProps } from '@/src/interfaces/index';
import { GraduationCap, MapPinIcon } from 'lucide-react-native';
import { View } from 'react-native';

export default function SchoolCardContent({
  selectedColor,
  address,
  qtdClasses,
}: SchoolCardContentProps) {
  return (
    <View>
      <View className="flex-row items-center align-middle text-sm mb-3 gap-1">
        <MapPinIcon className="mr-1.5" color="#6B7280" size={15} />
        <Text size="md">{address}</Text>
      </View>
      <View className={` self-start mb-3 px-3 py-1 rounded-md ${badgeColorMap[selectedColor]}`}>
        <View className="flex-row items-center gap-2 ">
          <GraduationCap color="#6B7280" size={15} />
          <Text size="md" className="font-bold">
            {qtdClasses} Turmas
          </Text>
        </View>
      </View>
    </View>
  );
}
