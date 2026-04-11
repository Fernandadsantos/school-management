import { Text } from '@/src/components/ui/text';
import { badgeColorMap } from '@/src/constants/constants';
import { CardContentProps } from '@/src/interfaces/index';
import { MapPinIcon, PackageIcon } from 'lucide-react-native';
import { View } from 'react-native';

export default function CardContent({
  selectedColor,
  subtitle,
  qtdClasses,
  type,
}: CardContentProps) {
  return (
    <View>
      <View className="flex-row items-center align-middle text-sm mb-3 gap-1">
        <MapPinIcon className="mr-1.5" color="#6B7280" size={15} />
        <Text size="md">{subtitle}</Text>
      </View>

      <View
        className={`flex-row items-center mb-3 gap-2 ${badgeColorMap[selectedColor]} p-1 rounded-md `}
      >
        <PackageIcon color="#6B7280" size={15} />
        <Text size="md" className="font-bold">
          {qtdClasses}
        </Text>
      </View>
    </View>
  );
}
