import { EditIcon, Icon } from '@/src/components/ui/icon';
import { Pressable } from '@/src/components/ui/pressable';
import { BtnEditClassProps } from '@/src/interfaces';
import { useState } from 'react';
import ModalEditClass from '../modalEditClass/modalEditClass';

export default function BtnEditClass({ item }: BtnEditClassProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => setIsOpen(true)}
        className="justify-center p-3 rounded-md active:bg-slate-100"
      >
        <Icon as={EditIcon} size="lg" color="gray" />
      </Pressable>

      <ModalEditClass isOpen={isOpen} setIsOpen={setIsOpen} item={item} />
    </>
  );
}
