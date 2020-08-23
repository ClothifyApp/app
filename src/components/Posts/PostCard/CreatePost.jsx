import React, { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CreateCardPost from '../CreateCardPost';
import {
  ImgWrapper, IconPlus, PlusCircle, Title,
} from './styled';

// Import ModalBase
import BaseModalPost from '../BaseModalPost';

const CreatePost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <ImgWrapper direction="column" align="center">
        <BaseModalPost
          position="fixed"
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          showClose
        >
          <CreateCardPost />
        </BaseModalPost>
        <PlusCircle onClick={handleOpenModal}>
          <IconPlus icon={faPlus} />
        </PlusCircle>
        <Title>
          Crear Publicación
        </Title>
      </ImgWrapper>
    </>
  );
};

export default CreatePost;
