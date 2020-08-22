import React, { useState } from 'react';
import { CreateCardPost } from '../create-card-post/CreateCardPost' 
import { ImgWrapper, IconPlus, PlusCircle, Title } from './style';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
      <ImgWrapper direction='column' align='center'>
        <BaseModal
          position='fixed'
          overflow='auto'
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          showClose>  
            <CreateCardPost />
          </BaseModal>
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
