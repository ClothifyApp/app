/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ImgWrapper, Img, Icon, Button, Touch } from './styled';

import { listMyGarmentsThunk } from '../../../actions/myGarmentsActions';

// import ModalDelete
import DeletePost from '../DeletePost';

// Import ModalBase
import BaseModalPost from '../BaseModalPost';
// import BaseModal from '../../modals/Base';

//import Swipe Component
import Swipe from '../../Swipe';
import Slider from '../../Swipe/Slider';

function PostCard({ garment }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenSwipe, setIsModalOpenSwipe] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <ImgWrapper>
        <BaseModalPost
          position="absolute"
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          showClose>
          <DeletePost />
        </BaseModalPost>
        <Button onClick={handleOpenModal}>
          <Icon icon={faTrash} />
        </Button>

        {/* modal post user */}
        <BaseModalPost
          position="fixed"
          isOpen={isModalOpenSwipe}
          onClose={handleCloseModalSwipe}
          showClose>
          <Swipe garment={garment} width="100%" />
        </BaseModalPost>
        {/* <Touch onClick={handleOpenModalSwipe} myGarment={garment}>
          <Img src={garment.photos[0]} />
        </Touch> */}
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
  listMyGarments: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  garment: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};
Swipe.defaultProps = {
  myGarment: {
    name: '',
    description: '',
    photos: [],
    tags: [],
    user: {},
  },
};
const mapStateToProps = (state) => ({
  myGarments: state.myGarments,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      listMyGarments: listMyGarmentsThunk,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
