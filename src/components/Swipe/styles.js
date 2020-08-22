import styled from 'styled-components';
import { totalHeight } from './constants';
export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 450px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BgCard = styled.div`
  position: absolute;
  top: ${totalHeight - 10}px;
  height: ${({ index }) => (index === 1 ? '30px' : '45px')};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ index }) => (index === 1 ? '97%' : '93%')};
  z-index: -${({ index }) => index};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;
