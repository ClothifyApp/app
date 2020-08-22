import React, { useState } from 'react';
import { CreateCardPost } from '../create-card-post/CreateCardPost' 
import { ImgWrapper, IconPlus, PlusCircle, Title } from './style';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

//Import ModalBase
import ModalCreatePost from '../BaseModalPost/ModalCreatePost';



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
      <ImgWrapper direction='column' align='center'>
        <ModalCreatePost
          position='fixed'
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          showClose>  
            <CreateCardPost />
          </ModalCreatePost>
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
