import React from 'react';

import { Tag, WrapperTag } from './styled';

const TagsPost = () => (
  <>
    <h2>Preferencias</h2>
    <WrapperTag>
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
    </WrapperTag>
  </>
);

export default TagsPost;
