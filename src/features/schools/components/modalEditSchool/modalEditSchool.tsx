import { Heading } from '@/src/components/ui/heading';
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from '@/src/components/ui/modal';
import { FormDataSchool, ModalEditSchoolProps } from '@/src/interfaces';
import { X } from 'lucide-react-native';
import { useSchoolStore } from '../../store/useSchoolStore';
import SchoolForm from '../schoolForm/schoolForm';

export default function ModalEditSchool({ isOpen, setIsOpen, item }: ModalEditSchoolProps) {
  const { editSchool } = useSchoolStore();

  const handleUpdate = async (data: FormDataSchool) => {
    await editSchool(item.id, data);
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
          <SchoolForm initialData={item} onSubmit={handleUpdate} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
