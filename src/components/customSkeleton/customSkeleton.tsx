import { Skeleton, SkeletonText } from '@/src/components/ui/skeleton';
import { skeletonArr } from '@/src/constants/constants';
import { View } from 'react-native';

export default function CustomSkeleton() {
  return (
    <View>
      <SkeletonText _lines={1} className=" m-4 h-4 w-3/5" />
      {skeletonArr.map((_, index) => (
        <View className="justify-center p-3 rounded-md" key={index}>
          <Skeleton variant="rounded" speed={3} className="h-[120px]" />
        </View>
      ))}
    </View>
  );
}
