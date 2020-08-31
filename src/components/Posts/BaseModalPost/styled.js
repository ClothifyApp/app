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
  z-index: ${(props) => props.Zindex || '10'};
`;

export const Modal = styled.div`
  position: relative;
  width: 100%;
  padding: 35px 25px;
  padding-top: 60px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.regular};
  text-align: center;
  border-radius: 10px;
  cursor: auto;
  @media ${device.mobileM} {
    margin-top: 70px;
    max-height: 600px;
    overflow: auto;
  }
  @media ${device.mobileL} {
    margin-top: 70px;
    max-height: 600px;
    overflow: auto;
  }
  @media ${device.tablet} {
    margin-top: 70px;
    width: 260px;
    max-height: 400px;
    overflow: auto;
  }
  @media ${device.laptop} {
    width: 460px;
    max-height: 90%;
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
    width: 500px;
    max-width: 500px;
    margin-top: 70px;
  }
`;
