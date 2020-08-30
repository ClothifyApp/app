import React from 'react';
import { Name, Entry, Text } from './styled';
import { Button } from '../../base/Buttons';

const InputsContainer = () => {

  return (
    <form >
      <div>
        <Name>Nombre de la prenda</Name>
        <Entry
          name="name"
          type="text"
          placeholder="name"
          value={input.name}
          required
        />
        <Name>Descripcion</Name>
        <Text
          name="description"
          required
        />
        <Button>Save</Button>
      </div>
    </form>
  );
};

export default InputsContainer;
