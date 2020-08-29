import React, { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import CreateCardPost from '../CreateCardPost';
import { ImgWrapper, IconPlus, PlusCircle, Title } from './styled';
import TagsPost from '../TagPost';
import { Button } from '../../base/Buttons';

// Import ModalBase
import BaseModalPost from '../BaseModalPost';

export const CreatePost = () => {
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
          Zindex='11'
          position="fixed"
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          showClose>
          <CreateCardPost onSave={handleCloseModal} />
        </BaseModalPost>
        <PlusCircle onClick={handleOpenModal}>
          <IconPlus icon={faPlus} />
        </PlusCircle>
        <Title>Crear Publicación</Title>
      </ImgWrapper>
    </>
  );
};

TagsPost.propTypes = {
  onEnds: PropTypes.func.isRequired,
};

export default CreatePost;
