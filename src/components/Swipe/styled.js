import styled from 'styled-components';
import { totalHeight } from './constants';

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width || '90%'};
  max-width: 450px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  animation-name: ${({ animate }) => (animate ? 'swipeup' : '')};
  animation-duration: .5s;
  animation-timing-function: ease-in;
  @keyframes swipeup {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    60% {
      transform: translateY(-50px);
      opacity: 0;
    }
    61% {
      transform: translateY(25px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
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
