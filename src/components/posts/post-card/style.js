import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { device } from '../device.js';

export const ImgWrapper = styled.figure`
  width: 380px;
  height: 280px;
  border-radius: 4px;
  display: block;
  margin: 0;
  box-shadow: 0px 2px 4px rgba(26, 22, 32, 0.2);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.align || 'flex-end'};
  @media ${device.mobileM} {
    width: 100%;
    height: 280px;
  }
  @media ${device.mobileL} {
    width: 100%;
    height: 280px;
  }
  @media ${device.desktop} {
    width: 100%;
    height: 280px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  border-radius: 4px;
`;

export const Touch = styled.a`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: white;
  font-size: 24px;
  margin: 0 4px 4px 0;
  &:hover {
    color: #da0b9f;
  }
`;

export const IconPlus = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: white;
  font-size: 24px;
  margin: 0 4px 4px 0;
  &:hover {
    color: #da0b9f;
  }
`;

export const Button = styled.a`
  position: absolute;
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
`;

export const PlusCircle = styled.a`
  position: absolute;
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
`;
