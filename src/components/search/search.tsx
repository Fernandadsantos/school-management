import { Input, InputField, InputIcon, InputSlot } from '@/src/components/ui/input';
import { SearchProps } from '@/src/interfaces';
import { XIcon } from 'lucide-react-native';
import { Pressable } from 'react-native';
import { SearchIcon } from '../ui/icon';

export default function Search({ placeholder, setSearchQuery, searchQuery }: SearchProps) {
  const handleClear = () => {
    if (setSearchQuery) {
      setSearchQuery('');
    }
  };

  return (
    <Input
      variant="rounded"
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      className="bg-gray-50 h-16 rounded-2xl border-none"
    >
      <InputSlot>
        <InputIcon as={SearchIcon} className="left-5" />
      </InputSlot>
      <InputField
        placeholder={placeholder}
        value={searchQuery}
        onChangeText={setSearchQuery}
        className="left-5"
      />
      {searchQuery && searchQuery.length > 0 && (
        <InputSlot className="pr-5">
          <Pressable onPress={handleClear}>
            <XIcon size={20} color="#666" />
          </Pressable>
        </InputSlot>
      )}
    </Input>
  );
}
