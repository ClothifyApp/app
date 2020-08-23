import React, { useState } from 'react';
import { ImagesContainer } from '../imagesContainer/ImagesContainer';
import { InputsContainer } from '../inputs-container/InputsContainer';
import { Button } from '../../base/Buttons';


export const CreateCardPost = ( { onContinue }) => {
  return (
    <>
      <ImagesContainer />
      <InputsContainer /> 
      <Button onClick={onContinue}>Continuar</Button>
    </>
  );
};
