import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Pictures, Input, Icon, Img } from '../ImagesContainer/styled';

const Pic = (props) => {
  const [image, setImage] = useState({ src: '', alt: '' });

  const onSelectImg = (e) => {
    const img = e.target.files;
    if (img && img.length > 0) {
      saveImage(img[0]);
    }
  };

  const saveImage = (image) => {
    const data = new FormData();
    data.append('image', image, image.name);
    axios
      .post('https://clothify-api.vercel.app/image', data, {
        headers: {
          accept: 'application/json',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDVjYzBjMDRhNjYyMDAwODg1MzA4MiIsImlhdCI6MTU5ODQwOTc0MCwiZXhwIjoxNjI5OTQ1NzQwfQ.hU6RR_w0ewbQrjOfO_7JViCcEBnwk7CR7DlqTmltXOg',
        },
      })
      .then((response) => {
        setImage({ src: response.data.data.imagePath, alt: image.name });
        props.setArrayImg([...props.arrayImg, response.data.data.imagePath]);
        console.log(props.arrayImg);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Pictures>
      {image.src ? <Img src={image.src} alt={image.alt} /> : null}
      <Icon icon={faPlus} />
      <Input onChange={onSelectImg} type="file" />
    </Pictures>
  );
};

Pic.propTypes = {
  arrayImg: PropTypes.func.isRequired,
  setArrayImg: PropTypes.func.isRequired,
};

export default Pic;
