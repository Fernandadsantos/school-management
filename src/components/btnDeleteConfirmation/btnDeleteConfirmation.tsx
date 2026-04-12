import { Icon, TrashIcon } from '@/src/components/ui/icon';
import { Pressable } from '@/src/components/ui/pressable';
import { BtnConfirmationProps } from '@/src/interfaces';
import ModalDeleteConfirmation from '../modalDeleteConfirmation/modalDeleteConfirmation';

export default function BtnDeleteConfirmation({
  onConfirmDelete,
  isOpen,
  setIsOpen,
}: BtnConfirmationProps) {
  return (
    <>
      <Pressable
        onPress={() => setIsOpen(true)}
        className="justify-center p-3 rounded-md focus:bg-slate-400"
      >
        <Icon as={TrashIcon} size="lg" color="gray" />
      </Pressable>
      <ModalDeleteConfirmation
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        onConfirmDelete={onConfirmDelete}
      />
    </>
  );
}
