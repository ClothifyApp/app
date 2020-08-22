import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper, Control } from './styles';
import ImageIndicator from './ImageIndicator';

export default function Slider({ imgeUrls, onClick }) {
  return (
    <Wrapper>
      <img
        onClick={onClick}
        src='https://i.pinimg.com/originals/1c/8f/3d/1c8f3deb5a43a45348993bb532f04ccf.jpg'
        alt=''
      />
      <ImageIndicator currentPage={1} totalPages={3} />
      <Control position='left'>
        <FontAwesomeIcon icon={faChevronLeft} size='lg' />
      </Control>
      <Control position='right'>
        <FontAwesomeIcon icon={faChevronRight} size='lg' />
      </Control>
    </Wrapper>
  );
}
