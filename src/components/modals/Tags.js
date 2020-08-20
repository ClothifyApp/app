import React from 'react';
import styled from 'styled-components';

import { Button } from '../base/Buttons';
import { Tag } from '../base/Tag';

const Small = styled.small`
  display: block;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  padding-bottom: 5px;
`;

const Wrapper = styled.div`
  padding: 25px 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function VerifyCode({ onEnds }) {
  return (
    <>
      <h2>Preferencias</h2>
      <Small>Selecciona al menos 3 preferencias.</Small>
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
      </Wrapper>
      <Button onClick={onEnds}>Finalizar</Button>
    </>
  );
}
