import styled from 'styled-components';
import { imageHeight, textHeight, totalHeight } from '../constants';

import { buttonMixin } from '../../base/Mixins';

export const Wrapper = styled.div`
  position: relative;
  height: ${totalHeight}px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  & img {
    position: absolute;
    display: block;
    width: 100%;
    height: ${imageHeight}px;
    object-fit: cover;
    background: ${({ theme }) => theme.colors.whiteOpacity};
  }
  & > .info {
    height: ${textHeight}px;
    margin-top: ${imageHeight}px;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    & h2,
    & p {
      margin: 0;
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