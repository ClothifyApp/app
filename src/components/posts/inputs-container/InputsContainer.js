import React from 'react';
import { Name, Entry, Text } from './style';

export const InputsContainer = () => {
  return (
    <div>
      <Name>Nombre de la prenda</Name>
      <Entry type='text' placeholder='name' />
      <Name>Descripcion</Name>
      <Text></Text>
    </div>
  );
};
