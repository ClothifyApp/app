import React from 'react';
import { Title } from './style';
import { Button } from '../../base/Buttons';

export const DeletePost = () => {
  return (
    <>
      <Title>Estás seguro que deseas eliminar esta publicación?</Title>
      <Button marginB='5px' size='10px'>
        SI
      </Button>
      {/* <Button size='10px'>NO</Button> */}
    </>
  );
};
