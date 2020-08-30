/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import options from './constants';
import device from '../base/device';

export const NotificationContainer = styled.div`
  width: 95%;
  max-width: 300px;
  height: 70px;
  background: ${({ theme, type }) => theme.colors[options[type].color]};
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.large};
  position: absolute;
  top: ${({ theme }) => theme.sizes.navbarHeight + 5}px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  padding: 20px;
  display: flex;
  align-items: center;
  p, h3 {
    margin: 0 0 0 20px;
  }
  @media ${device.mobileL} {
    left: 10px;
    top: initial;
    bottom: 10px;
    transform: initial;
  }
`;
