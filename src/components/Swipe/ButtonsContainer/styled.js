import styled from 'styled-components';
import { imageHeight } from '../constants';

const wrapperHeight = 50;

// eslint-disable-next-line import/prefer-default-export
export const ButtonsWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${wrapperHeight}px;
  margin: auto;
  margin-top: ${imageHeight - wrapperHeight / 2}px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  & button {
    margin: 0 5px;
  }
`;
