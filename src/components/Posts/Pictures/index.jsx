import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  Pictures,
  Input,
  Icon,
  Img,
  Preloader,
} from '../ImagesContainer/styled';
import { uploadImage } from '../../../api';

const Pic = ({
  arrayImg,
  setArrayImg,
  borderRadius,
  height,
  width,
  margin,
  selectedImgUrl,
}) => {
  const [image, setImage] = useState({ src: '', alt: '' });
  const [loader, setLoader] = useState(false);
  const [icon, setIcon] = useState(true);

  useEffect(() => {
    setImage({src: selectedImgUrl, alt: 'Foto de Perfil'});
  }, [selectedImgUrl]);

  const saveImage = async (newImage) => {
    const data = new FormData();
    data.append('image', newImage, newImage.name);
    setLoader(true);
    const url = await uploadImage(data);
    setArrayImg([...arrayImg, url]);
    setLoader(false);
    setIcon(false);
    setImage({ src: url, alt: newImage.name });
  };

  const onSelectImg = (e) => {
    const img = e.target.files;
    if (img && img.length > 0) {
      saveImage(img[0]);
    }
  };

  return (
    <Pictures
      borderRadius={borderRadius}
      height={height}
      width={width}
      margin={margin}
    >
      {image.src ? <Img src={image.src} alt={image.alt} /> : null}
      {loader ? <Preloader /> : null}
      {icon && !loader ? <Icon icon={faPlus} /> : null}
      <Input onChange={onSelectImg} type="file" />
    </Pictures>
  );
};

Pic.propTypes = {
  arrayImg: PropTypes.array.isRequired,
  setArrayImg: PropTypes.func.isRequired,
  borderRadius: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  margin: PropTypes.string,
  selectedImgUrl: PropTypes.string,
};

Pic.defaultProps = {
  borderRadius: null,
  height: null,
  width: null,
  margin: null,
  selectedImgUrl: null,
};

export default Pic;
