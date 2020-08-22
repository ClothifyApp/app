import React, { useState } from 'react';
import { ImgWrapper, IconPlus, PlusCircle } from './style';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

//Import ModalBase
import BaseModal from '../../modals/Base';

export const CreatePost = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <ImgWrapper>
        <BaseModal
          position='absolute'
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          showClose></BaseModal>
        <PlusCircle>
          <IconPlus icon={faPlusCircle} />
        </PlusCircle>
      </ImgWrapper>
    </>
  );
};
