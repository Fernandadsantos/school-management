import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View } from 'react-native';


export default function ModalScreen() {
  return (
    <View>
      <Text>Modal</Text>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
} 
