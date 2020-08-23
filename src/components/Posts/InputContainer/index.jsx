import React from 'react';
import TagsPost from '../TagPost';
import { Name, Entry, Text } from './styled';

const InputsContainer = () => (
  <div>
    <Name>Nombre de la prenda</Name>
    <Entry type="text" placeholder="name" />
    <Name>Descripcion</Name>
    <Text />
    <TagsPost />
  </div>
);

export default InputsContainer;
