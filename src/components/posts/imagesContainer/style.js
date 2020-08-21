import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { device } from '../device.js';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 5px;
  justify-content: center;
`;

export const Pictures = styled.div`
  width: 112px;
  height: 135px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background: ${({ theme }) => theme.colors.whiteOpacity};
  border-radius: 8px;
  box-shadow: 1px 2px 2px rgba(26, 22, 32, 0.25);
  text-align: center;
  position: relative;
  @media ${device.mobileM} {
    width: 97px;
    height: 110px;
  }
  @media ${device.mobileL} {
    width: 112px;
    height: 135px;
  }
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.whiteOpacity};
  border: none;
  left: 0;
  width: 112px;
  height: 135px;
  box-sizing: content-box;
  opacity: 0;
  cursor: pointer;
  position: absolute;
  justify-content: center;
  @media ${device.mobileM} {
    width: 90%;
    height: 135px;
  }
  @media ${device.mobileL} {
    width: 90%;
    height: 135px;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #da0b9f;
  font-size: 24px;
`;
