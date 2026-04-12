import { AddIcon, Icon } from '@/src/components/ui/icon';
import { Pressable } from '@/src/components/ui/pressable';
import { FloatingBtnProps } from '@/src/interfaces';
import { useRouter } from 'expo-router';

export default function FloatingBtn({ route }: FloatingBtnProps) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(route as any)}
      className="absolute bottom-6 right-6 w-16 h-16 bg-indigo-400 rounded-full items-center justify-center shadow-lg active:opacity-80 z-50"
    >
      <Icon as={AddIcon} size="xl" color="white" />
    </Pressable>
  );
}
