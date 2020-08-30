import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Pictures, Input, Icon, Img, Preloader } from '../ImagesContainer/styled';
import { uploadImage } from '../../../api';

const Pic = (props) => {
  const [image, setImage] = useState({ src: '', alt: '' });
  const [loader, setLoader] = useState(false);
  const [icon, setIcon] = useState(true);

  const loading = () => {
    setLoader(true)
  }

  const showIcon = () => {
    setIcon(true)
  }

  const onSelectImg = (e) => {
    const img = e.target.files;
    if (img && img.length > 0) {
      /* readImage(img[0]); */
      saveImage(img[0]);
    }
  };

  /* const readImage = (file) => {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      setImage({src: e.target.result}) ;
    }
    
    reader.readAsDataURL(file);

  } */

  const saveImage = async (image) => {
    const data = new FormData();
    data.append('image', image, image.name);
    setLoader(true)
    const url = await uploadImage(data)
    props.setArrayImg([...props.arrayImg, url ]);
    setLoader(false)
    setIcon(false)
    setImage({ src: url, alt: image.name });
  };

  return (
    <Pictures>
      {image.src ?  <Img   src={image.src} alt={image.alt} /> : null }
      {
        loader ? <Preloader></Preloader> : null
      }
      {
        icon ? <Icon icon={faPlus}/> : null
      } 
      <Input  onChange={onSelectImg} type="file" />
    </Pictures>
  );
};

Pic.propTypes = {
  arrayImg: PropTypes.func.isRequired,
  setArrayImg: PropTypes.func.isRequired,
};

export default Pic;
