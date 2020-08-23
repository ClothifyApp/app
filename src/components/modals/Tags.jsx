import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../base/Buttons';
import { Tag } from '../base/Tag';

import { TagWrapper, Small } from './styled';

const VerifyCode = ({ onEnds }) => (
  <>
    {onEnds && <h2>Preferencias</h2>}
    <Small>Selecciona al menos 3 preferencias.</Small>
    <TagWrapper padding={!!onEnds}>
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
    </TagWrapper>
    {onEnds && <Button onClick={onEnds}>Finalizar</Button>}
  </>
);

VerifyCode.propTypes = {
  onEnds: PropTypes.func.isRequired,
};

export default VerifyCode;
