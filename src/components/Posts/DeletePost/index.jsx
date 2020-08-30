import React from 'react';
import { Title } from './styled';
import { Button } from '../../base/Buttons';


 function DeletePost({onDelete})  {
   return(
      <>
        <Title>¿Estás seguro(a) que deseas eliminar esta publicación?</Title>
        <Button onClick={onDelete} marginB="5px" size="10px">
          SI
        </Button>
      </>
   )
 }

export default DeletePost;
