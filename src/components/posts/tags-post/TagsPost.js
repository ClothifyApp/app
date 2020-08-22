import React from 'react';
import { Button } from '../../base/Buttons';

import { Tag, Wrapper } from './style';

export default function TagsPost({ onEnds }) {
  return (
    <>
      <h2>Preferencias</h2>
      <Wrapper>
        <Tag>whatever</Tag>
        <Tag>pants</Tag>
        <Tag active>t-shirt</Tag>
        <Tag>skirt</Tag>
        <Tag>shoes</Tag>
        <Tag>tie</Tag>
        <Tag>whatever</Tag>
        <Tag>pants</Tag>
        <Tag active>t-shirt</Tag>
        <Tag>skirt</Tag>
        <Tag>shoes</Tag>
        <Tag>tie</Tag>
        <Button margin='10px' onClick={onEnds}>Guardar</Button>
      </Wrapper>
    </>
  );
}
