import React, { useState } from 'react';

import { Wrapper, BgCard } from './styles';
import Slider from './Slider';
import ButtonsContainer from './ButtonsContainer';
import Info from './Info';

export default function Swipe() {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <Slider onClick={handleImageClick} />
      <ButtonsContainer showReactions />
      <Info isOpen={isOpen} />
      <BgCard index={1} />
      <BgCard index={2} />
    </Wrapper>
  );
}
