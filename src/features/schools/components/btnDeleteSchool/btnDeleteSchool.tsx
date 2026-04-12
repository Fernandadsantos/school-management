import BtnDeleteConfirmation from '@/src/components/btnDeleteConfirmation/btnDeleteConfirmation';
import { BtnDeleteClassProps } from '@/src/interfaces/index';
import { useState } from 'react';
import { useSchoolStore } from '../../store/useSchoolStore';

export default function BtnDeleteSchool({ id }: BtnDeleteClassProps) {
  const { deleteSchool } = useSchoolStore();
  const [isOpen, setIsOpen] = useState(false);

  const onConfirmDelete = async () => {
    await deleteSchool(id);
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
