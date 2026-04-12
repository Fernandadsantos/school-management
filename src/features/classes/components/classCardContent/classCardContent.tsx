import { Text } from '@/src/components/ui/text';
import { badgeColorMap } from '@/src/constants/constants';
import { ClassCardContentProps } from '@/src/interfaces';
import { Clock } from 'lucide-react-native';
import { View } from 'react-native';

export default function ClassCardContent({ selectedColor, shift }: ClassCardContentProps) {
  return (
    <View className={` self-start mb-3 px-3 py-1 rounded-md ${badgeColorMap[selectedColor]}`}>
      <View className="flex-row items-center gap-2 ">
        <Clock color="#6B7280" size={15} />
        <Text size="md" className="font-bold">
          {shift}
        </Text>
      </View>
    </View>
  );
}
