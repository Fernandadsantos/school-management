import { EditIcon, Icon } from '@/src/components/ui/icon';
import { Pressable } from '@/src/components/ui/pressable';
import { BtnEditSchoolProps } from '@/src/interfaces';
import { useState } from 'react';
import ModalEditSchool from '../modalEditSchool/modalEditSchool';

export default function BtnEditSchool({ item }: BtnEditSchoolProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <Pressable onPress={handleOpen} className="justify-center p-3 rounded-md active:bg-slate-100">
        <Icon as={EditIcon} size="lg" color="gray" />
      </Pressable>

      <ModalEditSchool isOpen={isOpen} setIsOpen={setIsOpen} item={item} />
    </>
  );
}
