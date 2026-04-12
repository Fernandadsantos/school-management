import { Pressable } from '@/src/components/ui/pressable';
import { BtnSubmitProps } from '@/src/interfaces';
import { RotateCwIcon } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

export default function BtnSubmit({ isValid, btnTitle, handleCreate }: BtnSubmitProps) {
  const spinValue = useRef(new Animated.Value(0)).current;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View>
      <Pressable
        disabled={!isValid || isLoading}
        className={`mx-5 p-5 rounded-xl mb-10 ${isValid ? 'bg-indigo-500' : 'bg-gray-300'}`}
        onPress={() => handleCreate(setIsLoading)}
      >
        {isLoading ? (
          <View className="justify-center items-center m-auto">
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
              <RotateCwIcon size={24} color="white" />
            </Animated.View>
          </View>
        ) : (
          <Text
            className={`font-bold text-center text-lg ${isValid ? 'text-white' : 'text-gray-900'}`}
          >
            {btnTitle}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
