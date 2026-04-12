import { Heading } from '@/src/components/ui/heading';
import { Input, InputField } from '@/src/components/ui/input';
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@/src/components/ui/modal';
import { Pressable } from '@/src/components/ui/pressable';
import { Text } from '@/src/components/ui/text';
import { VStack } from '@/src/components/ui/vstack';
import { ModalEditSchoolProps } from '@/src/interfaces';
import { useState } from 'react';
import { useSchoolStore } from '../../store/useSchoolStore';

export default function ModalEditSchool({ isOpen, setIsOpen, item }: ModalEditSchoolProps) {
  const [name, setName] = useState(item.name);
  const [address, setAddress] = useState(item.address || '');
  const { editSchool } = useSchoolStore();

  const handleClose = () => {
    setName(item.name);
    setAddress(item.address || '');
    setIsOpen(false);
  };

  const onSave = async () => {
    const updatedData = {
      name,
      address: item.address ? address : undefined,
    };

    await editSchool(String(item.id), updatedData);
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Editar {item.name}</Heading>
        </ModalHeader>
        <ModalBody>
          <VStack space="md">
            <VStack space="xs">
              <Text size="sm">Nome</Text>
              <Input>
                <InputField value={name} onChangeText={setName} />
              </Input>
            </VStack>

            {item.address && (
              <VStack space="xs">
                <Text size="sm">Endereço</Text>
                <Input>
                  <InputField value={address} onChangeText={setAddress} />
                </Input>
              </VStack>
            )}
          </VStack>
        </ModalBody>
        <ModalFooter className="gap-3">
          <Pressable onPress={handleClose} className="bg-blue-500  p-2 rounded-md">
            <Text className="text-white font-semibold">Cancelar</Text>
          </Pressable>
          <Pressable onPress={onSave} className="bg-green-500  p-2 rounded-md">
            <Text className="text-white font-semibold">Salvar Alterações</Text>
          </Pressable>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
