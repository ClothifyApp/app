import styled from 'styled-components';
import { imageHeight } from '../constants';

const wraperHeight = 50;

export const ButtonsWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${wraperHeight}px;
  margin: auto;
  margin-top: ${imageHeight - wraperHeight / 2}px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  & button {
    margin: 0 5px;
  }
`;
