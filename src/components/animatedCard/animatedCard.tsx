import { AnimatedCardProps } from '@/src/interfaces';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { School } from 'lucide-react-native';
import { MotiView } from 'moti';
import { Pressable, Text, View } from 'react-native';

export default function AnimatedCard({ label, value, theme, route, Icon }: AnimatedCardProps) {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push(route)}>
      <MotiView
        from={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 15 }}
      >
        <LinearGradient
          colors={theme === 'blue' ? ['#4f46e5', '#3730a3'] : ['#028ac8', '#1eb4d5']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="rounded-[32px] p-9 flex-row justify-between shadow-xl relative overflow-hidden"
        >
          <View className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <View className="flex-row items-center gap-2 mb-2">
            <Icon size={19} color="#fff" />
            <Text className="text-lg font-extrabold text-white">{label}</Text>
          </View>

          <Text className="text-4xl font-extrabold text-white mb-1">{value}</Text>
        </LinearGradient>
      </MotiView>
    </Pressable>
  );
}
