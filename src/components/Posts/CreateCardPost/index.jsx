import React, { useState } from 'react';
import axios from 'axios';
/* import PropTypes from 'prop-types'; */

/* Others components */
import Pic from '../Pictures';

/* Styles */
import { Wrapper } from '../ImagesContainer/styled';
import { Name, Entry, Text } from '../InputContainer/styled';
import { Tag, WrapperTag } from '../TagPost/styled';

import { Button } from '../../base/Buttons';

const CreateCardPost = () => {
  const pictures = [1, 2, 3, 4, 5];
  const [arrayImg, setArrayImg] = useState([]);
  const [input, setInput] = useState({
    name: '',
    description: '',
  });

  const handleChangeInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const sendUserData = () => {
    const userData = { ...input, photos: arrayImg };
    axios
      .post('https://clothify-api.vercel.app/garments', userData, {
        headers: {
          accept: 'application/json',
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDA1NjgzYTIzODI2MDhiMDA5MWI5YSIsImlhdCI6MTU5ODMwODk2NywiZXhwIjoxNjI5ODQ0OTY3fQ.HjU_-1Zu_9z60EcItokCcyjzi5YCXIDIZVK3-RRJFuQ',
        },
      })
      .then((response) => {
        setInput({
          name: response.data.garment.name,
          description: response.data.garment.description,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const guardarDatos = (e) => {
    e.preventDefault();
    sendUserData();
  };
  return (
    <>
      <Wrapper>
        {pictures.map(() => (
          <Pic arrayImg={arrayImg} setArrayImg={setArrayImg} />
        ))}
      </Wrapper>
      <form onSubmit={guardarDatos}>
        <div>
          <Name>Nombre de la prenda</Name>
          <Entry
            name="name"
            onChange={handleChangeInputChange}
            type="text"
            placeholder="name"
            value={input.name}
            required
          />
          <Name>Descripcion</Name>
          <Text
            name="description"
            onChange={handleChangeInputChange}
            value={input.description}
            required
          />
        </div>
      </form>
      <h2>Preferencias</h2>
      <WrapperTag>
        <Tag>whatever</Tag>
        <Tag>pants</Tag>
        <Tag active>t-shirt</Tag>
        <Tag>skirt</Tag>
        <Tag>shoes</Tag>
        <Tag>tie</Tag>
        <Tag>whatever</Tag>
        <Tag>pants</Tag>
        <Tag active>t-shirt</Tag>
        <Tag>skirt</Tag>
        <Tag>shoes</Tag>
        <Tag>tie</Tag>
      </WrapperTag>
      <Button margin='30px 0 0 0' onClick={guardarDatos}>Guardar</Button>
    </>
  );
};

CreateCardPost.propTypes = {};

export default CreateCardPost;
