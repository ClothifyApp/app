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
  &:hover{
    background: rgba(235, 235, 235, 1);
  }
  @media ${device.mobileM} {
    width: 95px;
    height: 125px;
  }
  @media ${device.mobileL} {
    width: 110px;
    height: 135px;
  }
  @media ${device.laptop} {
    width: 130px;
    height: 155px;
  }
  @media ${device.desktop} {
    width: 140px;
    height: 160px;
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
`;
