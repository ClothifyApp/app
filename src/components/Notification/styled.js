/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import options from './constants';
import device from '../base/device';

export const NotificationContainer = styled.div`
  width: 95%;
  max-width: 350px;
  height: 70px;
  background: ${({ theme, type }) => theme.colors[options[type].color]};
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.large};
  position: absolute;
  top: ${({ theme, spacing }) => theme.sizes.navbarHeight + spacing}px;
  left: 50%;
  border-radius: 8px;
  transform: translateX(-50%);
  z-index: 99;
  padding: 20px;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: top 1s ease-in, left 1s ease;
  p,
  h3 {
    margin: 0 20px 0;
  }
  @media ${device.tablet} {
    left: 10px;
    left: ${({ spacing }) => (spacing < 0 ? '-100%' : '10px')};
    top: initial;
    bottom: 10px;
    transform: initial;
  }
`;

export const NotificationCloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
