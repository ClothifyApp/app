import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ImgWrapper, Img, Icon, Button, Touch } from './styled';

// import ModalDelete
import DeletePost from '../DeletePost';

// Import ModalBase
import BaseModal from '../../modals/Base';

//import Swipe Component
import Swipe from '../../Swipe';
import axios from 'axios';

const PostCard = ({ id, src }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenSwipe, setIsModalOpenSwipe] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [garments, setGarments] = useState({
    name: '',
    description: '',
    photos: [],
    tags: [],
  });

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


  const getGarmentUser = () => {
    const getGarment = { name: '', description: '', photos: [], tags: [] };
    axios
      .get('https://clothify-api.vercel.app/garments/user', getGarment, {
        headers: {
          accept: 'application/json',
        },
        
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getData = () => {
    getGarmentUser();
  };

  return (
    <>
      <ImgWrapper>
        <BaseModal
          position="absolute"
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          showClose>
          <DeletePost />
        </BaseModal>
        <Button onClick={handleOpenModal}>
          <Icon icon={faTrash} />
        </Button>

        {/* modal post user */}
         {/* <BaseModal
          position="fixed"
          isOpen={isModalOpenSwipe}
          onClose={handleCloseModalSwipe}
          showClose>
          <Swipe imageUrls={setGarments.photos}  width="100%" />
        </BaseModal>  */}
        <Touch onSubmit={getData} onClick={handleOpenModalSwipe} >
          <Img src={setGarments.photos} id={id} />
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
