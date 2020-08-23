import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const buttonMixin = css`
  border: 0;
  outline: 0;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.white};
`;
