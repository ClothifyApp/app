import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../base/device';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 8px;
  justify-content: center;
`;

export const Pictures = styled.div`
  width: ${({ width }) => width || 80}px;
  height: ${({ height }) => height || 100}px;
  margin: ${({ margin }) => margin || null};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background: ${({ theme }) => theme.colors.whiteOpacity};
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
  box-shadow: 1px 2px 2px rgba(26, 22, 32, 0.25);
  text-align: center;
  position: relative;
  &:hover {
    background: rgba(235, 235, 235, 1);
  }
  @media ${device.mobileM} {
    width: ${({ width }) => width || 95}px;
    height: ${({ height }) => height || 125}px;
  }
  @media ${device.mobileL} {
    width: ${({ width }) => width || 110}px;
    height: ${({ height }) => height || 135}px;
  }
  @media ${device.laptop} {
    width: ${({ width }) => width || 130}px;
    height: ${({ height }) => height || 155}px;
  }
  @media ${device.desktop} {
    width: ${({ width }) => width || 140}px;
    height: ${({ height }) => height || 160}px;
  }
`;

export const Img = styled.img`
  border: none;
  box-sizing: content-box;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  justify-content: center;
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
    width: 95px;
    height: 125px;
  }
  @media ${device.mobileL} {
    width: 110px;
    height: 135px;
  }
  @media ${device.laptop} {
    width: 120px;
    height: 145px;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.pinkLighter};
  font-size: 24px;
  margin: 0 4px 4px 0;
  position: absolute;
`;

export const Preloader = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  z-index: 2;
  margin: 0 4px 4px 0;
  background-color: #eee;
  border: 5px solid #b71ab7;
  border-top: 5px solid white;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  animation-name: girar;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes girar {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
