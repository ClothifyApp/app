import styled from 'styled-components';

import { buttonMixin } from './base/Mixins';

// eslint-disable-next-line import/prefer-default-export
export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  margin: 7px 0;
  color: ${({ theme }) => theme.colors.greyLighter};
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyLighter};
  & input,
  & select {
    ${buttonMixin}
    padding: 3px;
    width: 50%;
    text-align: right;
    color: ${({ theme }) => theme.colors.greyLighter};
    cursor: auto;
    appearance: none;
  }
  & input::placeholder {
    color: ${({ theme }) => theme.colors.greyLighter};
  }
`;
