import { Input, InputField, InputIcon, InputSlot } from '@/src/components/ui/input';
import { SearchProps } from '@/src/interfaces';
import { SearchIcon } from '../ui/icon';

export default function Search({ placeholder, setSearchQuery, searchQuery }: SearchProps) {
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
    </Input>
  );
}
