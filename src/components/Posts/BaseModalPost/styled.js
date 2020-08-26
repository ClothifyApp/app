import styled from 'styled-components';
import { flexCenter } from '../../base/Mixins';
import { device } from '../../base/device';

export const Overlay = styled.dialog`
  ${flexCenter};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  position: ${(props) => props.position || 'fixed'};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border: 0;
  cursor: pointer;
  transition: 0.3s;
  overflow: ${(props) => props.overflow || ''};
  z-index: 10;
`;

export const Modal = styled.div`
  position: relative;
  width: 400px;
  padding: 25px 25px;
  padding-top: 60px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.regular};
  text-align: center;
  border-radius: 10px;
  cursor: auto;
  @media ${device.mobileM} {
    width: 100%;
    height: 700px;
    margin-top: 70px;
    overflow: auto;
  }
  @media ${device.mobileL}{
    width:  100%;
    height: auto;
    margin-top: 70px;
    overflow: auto;
  }
  @media ${device.tablet}{
    width:  100%;
    height: auto;
    margin-top: 70px;
    overflow: auto;
  }
  @media ${device.laptop} {
    width: 460px;
    height: 620px;
    margin-top: 70px;
    overflow: auto;
  }
  @media ${device.laptopL} {
    width: 460px;
    height: auto;
    margin-top: 70px;
    overflow: auto;
  }
  @media ${device.desktop} {
    width: 100%;
    max-width: 500px;
    height: auto;
    margin-top: 70px;
  }
`;
