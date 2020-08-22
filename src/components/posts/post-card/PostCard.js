import React, { useState } from 'react';
import { ImgWrapper, Img, Icon, Button, Touch } from './style';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

//import ModalDelete
import { DeletePost } from '../delete-post/DeletePost';

//Import ModalBase
import BaseModal from '../../modals/Base';

export const PostCard = (props) => {
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
          showClose>
          <DeletePost />
        </BaseModal>
        <Button onClick={handleOpenModal}>
          <Icon icon={faTrash} />
        </Button>
        <Touch href='instagram'>
          <Img src={props.url} id={props.id} />
        </Touch>
      </ImgWrapper>
    </>
  );
};
