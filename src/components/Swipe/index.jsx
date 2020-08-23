import React, { useState } from 'react';

import { Wrapper, BgCard } from './styled';
import Slider from './Slider';
import ButtonsContainer from './ButtonsContainer';
import Info from './Info';

const images = [
  'https://i.pinimg.com/originals/b9/c4/53/b9c4539c094848a95548a26e1fe6a207.jpg',
  'https://i.pinimg.com/originals/77/42/6c/77426ca1fd324f1c96f6fef71c5d5b50.jpg',
  'https://i.pinimg.com/564x/6f/5f/ea/6f5fea506c85da0ee892b7b498fe8706.jpg',
  'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2016/01/how_to_find_models_lead.jpg',
];

export default function Swipe() {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <Slider onClick={handleImageClick} imageUrls={images} />
      <ButtonsContainer showReactions />
      <Info isOpen={isOpen} />
      <BgCard index={1} />
      <BgCard index={2} />
    </Wrapper>
  );
}
