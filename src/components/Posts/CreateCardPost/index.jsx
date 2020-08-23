import React from 'react';
import PropTypes from 'prop-types';

import ImagesContainer from '../ImagesContainer';
import InputsContainer from '../InputContainer';
import { Button } from '../../base/Buttons';

const CreateCardPost = ({ onContinue }) => (
  <>
    <ImagesContainer />
    <InputsContainer />
    <Button onClick={onContinue}>Continuar</Button>
  </>
);

CreateCardPost.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

export default CreateCardPost;
