import React from 'react';
import { Title } from './styled';
import { Button } from '../../base/Buttons';

export const DeletePost = () => (
  <>
    <Title>Estás seguro que deseas eliminar esta publicación?</Title>
    <Button marginB="5px" size="10px">
      SI
    </Button>
  </>
);

export default DeletePost;
