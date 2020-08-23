import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  ImgWrapper, Img, Icon, Button, Touch,
} from './styled';

// import ModalDelete
import DeletePost from '../DeletePost';

// Import ModalBase
import BaseModal from '../../modals/Base';

const PostCard = ({ id, src }) => {
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
          position="absolute"
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          showClose
        >
          <DeletePost />
        </BaseModal>
        <Button onClick={handleOpenModal}>
          <Icon icon={faTrash} />
        </Button>
        <Touch href="instagram">
          <Img src={src} id={id} />
        </Touch>
      </ImgWrapper>
    </>
  );
};

PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default PostCard;
