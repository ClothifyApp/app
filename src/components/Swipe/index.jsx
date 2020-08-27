/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, BgCard } from './styled';
import Slider from './Slider';
import ButtonsContainer from './ButtonsContainer';
import Info from './Info';

function Swipe({
  width,
  onWhatsapp,
  onLike,
  onDislike,
  onSuperLike,
  garment,
}) {
  const [isOpen, setIsOpen] = useState(true);

  const handleImageClick = () => setIsOpen(!isOpen);

  return (
    <Wrapper width={width}>
      <Slider
        onClick={handleImageClick}
        imageUrls={garment.photos}
      />
      <ButtonsContainer
        onWhatsapp={onWhatsapp}
        onLike={onLike}
        onDislike={onDislike}
        onSuperLike={onSuperLike}
      />
      <Info isOpen={isOpen} garment={garment} />
      <BgCard index={1} />
      <BgCard index={2} />
    </Wrapper>
  );
}

Swipe.propTypes = {
  width: PropTypes.number,
  onDislike: PropTypes.func,
  onSuperLike: PropTypes.func,
  onLike: PropTypes.func,
  onWhatsapp: PropTypes.func,
  garment: PropTypes.object,
};

Swipe.defaultProps = {
  onDislike: null,
  width: null,
  onSuperLike: null,
  onLike: null,
  onWhatsapp: null,
  garment: {
    name: '',
    description: '',
    photos: [],
    tags: [],
    user: {},
  },
};

export default Swipe;
