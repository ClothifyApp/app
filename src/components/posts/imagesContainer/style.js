import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
`;

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #da0b9f;
  font-size: 24px;
  margin: 0 4px 4px 0;
`;
