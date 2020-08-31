/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ImgWrapper, Icon, Button } from './styled';

import { deleteGarmentThunk } from '../../../actions/myGarmentsActions';

// import ModalDelete
import DeletePost from '../DeletePost';

// Import ModalBase
import BaseModalPost from '../BaseModalPost';

// import Swipe Component
import Swipe from '../../Swipe';
import Slider from '../../Swipe/Slider';

function PostCard({ garment, deleteGarment }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenSwipe, setIsModalOpenSwipe] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleOpenModalSwipe = () => {
    setIsModalOpenSwipe(true);
  };
  const handleCloseModalSwipe = () => {
    setIsModalOpenSwipe(false);
  };

  const handleDeleteGarment = () => {
    deleteGarment(garment._id);
  };

  return (
    <>
      <ImgWrapper>
        <BaseModalPost
          position="absolute"
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          showClose
        >
          <DeletePost onDelete={handleDeleteGarment} />
        </BaseModalPost>
        <Button onClick={handleOpenModal}>
          <Icon icon={faTrash} />
        </Button>

        {/* modal post user */}
        <BaseModalPost
          position="fixed"
          isOpen={isModalOpenSwipe}
          onClose={handleCloseModalSwipe}
          showClose
        >
          <Swipe garment={garment} width="100%" />
        </BaseModalPost>
        <Slider
          height="360px"
          border="4px"
          onClick={handleOpenModalSwipe}
          imageUrls={garment.photos}
        />
      </ImgWrapper>
    </>
  );
}

PostCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  garment: PropTypes.object.isRequired,
  deleteGarment: PropTypes.func.isRequired,
};
Swipe.defaultProps = {};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    deleteGarment: deleteGarmentThunk,
  },
  dispatch,
);

export default connect(null, mapDispatchToProps)(PostCard);
