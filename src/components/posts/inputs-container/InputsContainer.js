import React from 'react';
import TagsPost from '../tags-post/TagsPost';
import { Name, Entry, Text } from './style';

export const InputsContainer = () => {
  return (
    <div>
      <Name>Nombre de la prenda</Name>
      <Entry type='text' placeholder='name' />
      <Name>Descripcion</Name>
      <Text></Text>
      <TagsPost />
    </div>
  );
};
