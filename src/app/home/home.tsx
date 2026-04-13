import AnimatedCard from '@/src/components/animatedCard/animatedCard';
import CustomSkeleton from '@/src/components/customSkeleton/customSkeleton';
import MiniCard from '@/src/components/miniCard/miniCard';
import { useClassStore } from '@/src/features/classes/store/useClassesStore';
import { useSchoolStore } from '@/src/features/schools/store/useSchoolStore';
import { useRouter } from 'expo-router';
import { Building, Plus } from 'lucide-react-native';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function Home() {
  const router = useRouter();
  const { fetchClasses, classes } = useClassStore();
  const { fetchSchools, schools, isLoading } = useSchoolStore();

  useEffect(() => {
    fetchClasses();
    fetchSchools();
  }, []);

  return (
    <View>
      <View className="px-6 pt-14 pb-4">
        <Text className="text-2xl font-bold text-[#1A1A1A]">Olá, Administrador 👋</Text>
        <Text className="text-[#6B7280] text-sm mt-1">Aqui está o resumo das sus instituições</Text>
      </View>

      {isLoading ? (
        <CustomSkeleton />
      ) : (
        <View className="px-5 gap-5">
          <AnimatedCard
            value={schools.length}
            label="Escolas Ativas"
            theme="blue"
            route="/(tabs)/schools"
          />
          <AnimatedCard
            value={classes.length}
            label="Turmas Ativas"
            theme="yellow"
            route="/(tabs)/classes"
          />

          <View>
            <Text className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 px-1">
              AÇÕES RÁPIDAS
            </Text>

            <View className="gap-3">
              <MiniCard Icon={Plus} title="Nova Escola" subtitle="Adicionar instituição" />
              <MiniCard Icon={Building} title="Nova Turma" subtitle="Adicionar turma" />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
