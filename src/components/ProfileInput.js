import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { buttonMixin } from './base/Mixins';

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  margin: 7px 0;
  color: ${({ theme }) => theme.colors.greyLigther};
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyLigther};
  & input,
  & select {
    ${buttonMixin}
    padding: 3px;
    width: 50%;
    text-align: right;
    color: ${({ theme }) => theme.colors.greyLigther};
    cursor: auto;
    appearance: none;
  }
`;

export function ProfileInput({ icon, text, children }) {
  return (
    <InputWrapper>
      <div>
        <FontAwesomeIcon icon={icon} />
        <span className='m-left-xs'>{text}</span>
      </div>
      {children}
    </InputWrapper>
  );
}
