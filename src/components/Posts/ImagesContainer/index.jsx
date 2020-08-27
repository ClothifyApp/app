import React from 'react';
import { Wrapper } from './styled';
import Pic from '../Pictures';

const ImagesContainer = () => {
  const pictures = [1, 2, 3, 4, 5]
  return(
    <Wrapper>
      {
        pictures.map(() => (<Pic />) )         
      }
    </Wrapper>
  )
}


export default ImagesContainer;
