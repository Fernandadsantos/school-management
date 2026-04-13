import { MiniCardProps } from '@/src/interfaces';
import { useRouter } from 'expo-router';
import { ChevronRightIcon } from 'lucide-react-native';
import { MotiView } from 'moti';
import { Pressable, Text, View } from 'react-native';

export default function MiniCard({ Icon, title, subtitle }: MiniCardProps) {
  const router = useRouter();

  return (
    <View>
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 200 }}
      >
        <View className="gap-3 ">
          <Pressable
            onPress={() => router.push('/school/createSchool')}
            className="bg-white p-4 rounded-2xl shadow-sm flex-row items-center justify-between active:bg-gray-50"
          >
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-indigo-50 rounded-xl items-center justify-center">
                <Icon size={24} color="#0284c7" />
              </View>
              <View>
                <Text className="font-semibold text-[#1A1A1A]">{title}</Text>
                <Text className="text-xs text-[#6B7280]">{subtitle}</Text>
              </View>
            </View>
            <ChevronRightIcon size={20} color="#D1D5DB" />
          </Pressable>
        </View>
      </MotiView>
    </View>
  );
}
