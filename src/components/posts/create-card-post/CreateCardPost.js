import React from 'react';
import { ImagesContainer } from '../imagesContainer/ImagesContainer';
import { InputsContainer } from '../inputs-container/InputsContainer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { TopButton } from '../../base/Buttons';
import { Contain } from './style';

export const CreateCardPost = () => {
  return (
    <Contain>
      <TopButton z_index='relative' position='center' margin='0 0 5px 0'>
        <FontAwesomeIcon icon={faChevronLeft} />
      </TopButton>
      <ImagesContainer />
      <InputsContainer />
    </Contain>
  );
};
