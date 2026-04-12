import { Heading } from '@/src/components/ui/heading';
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from '@/src/components/ui/modal'; // Ajuste o caminho
import { FormDataClass, ModalEditClassProps } from '@/src/interfaces';
import { X } from 'lucide-react-native';
import { useClassStore } from '../../store/useClassesStore';
import ClassForm from '../classForm/classForm';

export default function ModalEditClass({ isOpen, setIsOpen, item }: ModalEditClassProps) {
  const { editClass } = useClassStore();

  const handleUpdate = async (data: FormDataClass) => {
    await editClass(item.id, data);
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg">
      <ModalBackdrop />
      <ModalContent className="bg-white">
        <ModalHeader>
          <Heading size="lg">Editar Turma</Heading>
          <ModalCloseButton>
            <X size={20} color={'#000'} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <ClassForm initialData={item} onSubmit={handleUpdate} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
