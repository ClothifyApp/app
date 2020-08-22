import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { device } from '../device.js';

export const ImgWrapper = styled.figure`
  width: 380px;
  height: 280px;
  border-radius: 4px;
  display: block;
  margin: 0;
  background-color: white;
  box-shadow: 2px 2px 8px rgba(26, 22, 32, 0.2);
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.direction || '' };
  justify-content: center;
  align-items: ${(props) => props.align || 'flex-end'};
  @media ${device.mobileM} {
    width: 270px;
    height: 240px;
  }
  @media ${device.mobileL} {
    width: 300px;
    height: 260px;
  }
  @media ${device.desktop} {
    width: 360px;
    height: 280px;
  }
  @media ${device.desktopL} {
    width: 360px;
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
  color: #da0b9f;
  font-size: 64px;

`;

export const Button = styled.a`
  position: absolute;
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
`;

export const PlusCircle = styled.a`
  width: 64px;
  height: 64px;
`;

export const Title = styled.h1`
  font-family: 'Proxima nova';
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
`;
