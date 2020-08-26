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

//import Swipe Component
import Swipe from '../../Swipe'
import axios from 'axios';

const PostCard = ({ id, src }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [garments, setGarments] = useState({
    name: '',
    description: '',
    photos: [],
    tags: [],
  })

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const getData = () => {
    getGarmentUser();
    console.log(getGarmentUser)
  }

  const getGarmentUser = () => {
    const getGarment = {name: '', description: '', photos: [], tags: []}
    axios.get('https://clothify-api.vercel.app/garments/user', getGarment, {
      headers: {
        accept: 'application/json',
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDVjYzBjMDRhNjYyMDAwODg1MzA4MiIsImlhdCI6MTU5ODQwOTc0MCwiZXhwIjoxNjI5OTQ1NzQwfQ.hU6RR_w0ewbQrjOfO_7JViCcEBnwk7CR7DlqTmltXOg'
      },
    })
    .then((response) => {
      setGarments({
        name: response.data.garments.name,
        description: response.data.garments.description,
        photos: response.data.garments.photos,
        tag: response.data.garments.tags,
        
      })
      console.log(response.data.garments.name)
    })
    .catch((error) => {
      console.log(error);
    });
  }

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
        <Button onClick={handleOpenModal} >
          <Icon icon={faTrash} />
        </Button>
        <BaseModal
          position="fixed"
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          showClose
        >
          <Swipe garments={garments}  width='100%' />
        </BaseModal> 
        <Touch onSubmit={getData} onClick={handleOpenModal} >
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
