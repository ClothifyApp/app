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
  user,
  garment = {
    name: '',
    description: '',
    photos: [],
    tags: [],
  },
}) {
  const [isOpen, setIsOpen] = useState(true);

  const handleImageClick = () => setIsOpen(!isOpen);

  return (
    <Wrapper width={width}>
      <Slider
        onClick={handleImageClick}
        imageUrls={garment.photos}
        user={user}
        garments={garment}
      />
      <ButtonsContainer
        onWhatsapp={onWhatsapp}
        onLike={onLike}
        onDislike={onDislike}
        onSuperLike={onSuperLike}
      />
      <Info  name={garment.name} description={garment.description} isOpen={isOpen} />
      <BgCard index={1} />
      <BgCard index={2} />
    </Wrapper>
  );
}

Swipe.propTypes = {
  onDislike: PropTypes.func,
  onSuperLike: PropTypes.func,
  onLike: PropTypes.func,
  onWhatsapp: PropTypes.func,
  garment: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

Swipe.defaultProps = {
  onDislike: null,
  onSuperLike: null,
  onLike: null,
  onWhatsapp: null,
};

export default Swipe;
