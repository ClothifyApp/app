import React from 'react';
import { Name, Entry, Text } from './styled';


const InputsContainer = ({ onContinue }) => (
  <div>
    <Name>Nombre de la prenda</Name>
    <Entry type="text" placeholder="name" />
    <Name>Descripcion</Name>
    <Text />
  </div>
);

export default InputsContainer;
