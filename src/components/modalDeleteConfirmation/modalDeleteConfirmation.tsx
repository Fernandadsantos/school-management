import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
} from '@/src/components/ui/modal';
import { Pressable } from '@/src/components/ui/pressable';
import { ModalDeleteConfirmationProps } from '@/src/interfaces';
import { TriangleAlertIcon } from 'lucide-react-native';
import { Text, View } from 'react-native';

export default function ModalDeleteConfirmation({
  isOpen,
  handleClose,
  onConfirmDelete,
}: ModalDeleteConfirmationProps) {
  return (
    <Modal isOpen={isOpen} onClose={handleClose} className="z-10 w-full h-full">
      <ModalBackdrop />
      <ModalContent>
        <View className="flex-row gap-2">
          <Text className="text-lg font-bold">Confirmação de exclusão</Text>
          <TriangleAlertIcon size={20} color="red" />
        </View>
        <ModalBody>
          <Text className="font-semibold">
            Você tem certeza que deseja excluir este item? Esta ação não pode ser desfeita.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Pressable onPress={handleClose} className="bg-blue-500  p-2 rounded-md">
            <Text className="text-white font-semibold">Cancelar</Text>
          </Pressable>
          <Pressable onPress={onConfirmDelete} className="bg-red-500  p-2 rounded-md">
            <Text className="text-white font-semibold">Excluir</Text>
          </Pressable>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
