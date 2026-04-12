import BtnDeleteConfirmation from '@/src/components/btnDeleteConfirmation/btnDeleteConfirmation';
import { BtnDeleteClassProps } from '@/src/interfaces/index';
import { useState } from 'react';
import { useClassStore } from '../../store/useClassesStore';

export default function BtnDeleteClass({ id }: BtnDeleteClassProps) {
  const { deleteClass } = useClassStore();
  const [isOpen, setIsOpen] = useState(false);

  const onConfirmDelete = async () => {
    await deleteClass(id);
    setIsOpen(false);
  };

  return (
    <BtnDeleteConfirmation
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onConfirmDelete={onConfirmDelete}
    />
  );
}
