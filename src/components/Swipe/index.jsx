import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, BgCard } from './styled';
import Slider from './Slider';
import ButtonsContainer from './ButtonsContainer';
import Info from './Info';

function Swipe({
  onWhatsapp,
  onLike,
  onDislike,
  onSuperLike,
  user,
  garments: {
    name,
    description,
    photos,
    tags
  }
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <Slider onClick={handleImageClick} imageUrls={images} user={user} garments={...garments} />
      <ButtonsContainer
        onWhatsapp={onWhatsapp}
        onLike={onLike}
        onDislike={onDislike}
        onSuperLike={onSuperLike}
      />
      <Info isOpen={isOpen} />
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
  // eslint-disable-next-line react/forbid-prop-types
  images: PropTypes.array.isRequired,
  garments: PropTypes.object.isRequired,
};

Swipe.defaultProps = {
  onDislike: null,
  onSuperLike: null,
  onLike: null,
  onWhatsapp: null,
};

export default Swipe;
