import AnimatedCard from '@/src/features/home/components/animatedCard/animatedCard';
import CustomSkeleton from '@/src/components/customSkeleton/customSkeleton';
import MiniCard from '@/src/features/home/components/miniCard/miniCard';
import { useClassStore } from '@/src/features/classes/store/useClassesStore';
import { useSchoolStore } from '@/src/features/schools/store/useSchoolStore';
import { GraduationCap, Plus, School } from 'lucide-react-native';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function Home() {
  const { fetchClasses, classes } = useClassStore();
  const { fetchSchools, schools, isLoading } = useSchoolStore();

  useEffect(() => {
    fetchClasses();
    fetchSchools();
  }, []);

  return (
    <View className="flex-1 bg-[#F5F5F0] pb-4">
      <View className="px-6 pt-14 pb-4">
        <Text className="text-2xl font-bold text-[#1A1A1A]">Olá, Administrador 👋</Text>
        <Text className="text-[#6B7280] text-lg font-medium mt-1">
          Aqui está o resumo das sus instituições
        </Text>
      </View>

      {isLoading ? (
        <CustomSkeleton />
      ) : (
        <View className="px-5 pt-5 gap-5">
          <AnimatedCard
            value={schools.length}
            label="Escolas Ativas"
            theme="blue"
            route="/(tabs)/schools"
            Icon={School}
          />
          <AnimatedCard
            value={classes.length}
            label="Turmas Ativas"
            theme="yellow"
            route="/(tabs)/classes"
            Icon={GraduationCap}
          />

          <View>
            <Text className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 px-1">
              AÇÕES RÁPIDAS
            </Text>

            <View className="gap-3">
              <MiniCard Icon={Plus} title="Nova Escola" subtitle="Adicionar instituição" />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
