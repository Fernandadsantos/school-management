import { Icon, TrashIcon } from '@/src/components/ui/icon';
import { Pressable } from '@/src/components/ui/pressable';
import { useSchoolStore } from '@/src/features/schools/store/useSchoolStore';
import { BtnConfirmationProps } from '@/src/interfaces';
import { useState } from 'react';
import ModalDeleteConfirmation from '../modalDeleteConfirmation/modalDeleteConfirmation';

export default function BtnDeleteConfirmation({ id }: BtnConfirmationProps) {
  const { deleteSchool } = useSchoolStore();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const onConfirmDelete = async () => {
    await deleteSchool(id);
    handleClose();
  };

  return (
    <>
      <Pressable onPress={handleOpen} className="justify-center p-3 rounded-md focus:bg-slate-400">
        <Icon as={TrashIcon} size="lg" color="gray" />
      </Pressable>
      <ModalDeleteConfirmation
        isOpen={isOpen}
        handleClose={handleClose}
        onConfirmDelete={onConfirmDelete}
      />
    </>
  );
}
