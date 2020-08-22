import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper, Control, ImageSlider } from './styles';
import ImageIndicator from './ImageIndicator';

export default function Slider({ imageUrls, onClick }) {
  const [currentImage, setCurrentImage] = useState(1);

  const handleMoveSlideLeft = () => {
    setCurrentImage(currentImage - 1);
  };

  const handleMoveSlideRight = () => {
    setCurrentImage(currentImage + 1);
  };

  return (
    <Wrapper>
      <ImageSlider current={currentImage} total={imageUrls.length}>
        {imageUrls.map((url, index) => (
          <img onClick={onClick} src={url} key={index} alt='Clothe' />
        ))}
      </ImageSlider>
      <ImageIndicator
        currentPage={currentImage}
        totalPages={imageUrls.length}
        color='greyLigther'
      />
      {currentImage > 1 && (
        <Control position='left' onClick={handleMoveSlideLeft}>
          <FontAwesomeIcon icon={faChevronLeft} size='lg' />
        </Control>
      )}
      {currentImage < imageUrls.length && (
        <Control position='right' onClick={handleMoveSlideRight}>
          <FontAwesomeIcon icon={faChevronRight} size='lg' />
        </Control>
      )}
    </Wrapper>
  );
}
