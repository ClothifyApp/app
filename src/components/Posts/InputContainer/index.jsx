import React, { useState } from 'react';
import axios from 'axios';
import { Name, Entry, Text } from './styled';
import { Button } from '../../base/Buttons';

const InputsContainer = () => {
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

  const guardarDatos = (e) => {
    e.preventDefault();
  };

  const sendUserData = () => {
    const userData = { ...input };
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

  return (
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
        <Button onClick={sendUserData}>Save</Button>
      </div>
    </form>
  );
};

export default InputsContainer;
