import React from 'react';
import PropTypes from 'prop-types';

import { Tag, WrapperTag } from './styled';

const TagsPost = ({ onEnds }) => (
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

TagsPost.propTypes = {
  onEnds: PropTypes.func,
};

TagsPost.defaultProps = {
  onEnds: null,
};

export default TagsPost;
