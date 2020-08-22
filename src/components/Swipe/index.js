import React from 'react';

import { Wrapper } from './styles';
import Slider from './Slider';
import ButtonsContainer from './ButtonsContainer';
import Info from './Info';

export default function Swipe() {
  return (
    <Wrapper>
      <Slider />
      <ButtonsContainer showReactions />
      <Info />
    </Wrapper>
  );
}
