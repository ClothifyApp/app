/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px 0;
  text-align: center;
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
