import styled from 'styled-components';
import { imageHeight } from '../constants';

import { buttonMixin } from '../../base/Mixins';

export const Wrapper = styled.div`
  position: relative;
  height: 355px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.regular};
`;

export const ImageSlider = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: ${({ total }) => total * 100}%;
  top: 0;
  left: ${({ current }) => (current - 1) * -100}%;
  transition: 0.4s;
  & img {
    display: block;
    height: ${imageHeight}px;
    width: 100%;
    object-fit: cover;
    background: ${({ theme }) => theme.colors.whiteOpacity};
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.9;
    }
  }
`;

export const Control = styled.button`
  ${buttonMixin};
  position: absolute;
  top: 0;
  ${({ position }) => position}: 0;
  margin: 0 10px;
  margin-top: ${imageHeight / 2}px;
  hegth: 30px;
  display: flex;
  align-items: center;
  transition: 0.3s;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: ${({ theme }) => theme.shadows.regular};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
