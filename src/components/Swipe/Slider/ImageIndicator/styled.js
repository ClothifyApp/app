import styled from 'styled-components';

export const IndicatorWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 15px;
`;

export const IndicatorElement = styled.div`
  width: ${({ totalElements }) => 80 / totalElements}%;
  height: 3px;
  margin: 0 2px;
  background: ${({ theme, color }) => theme.colors[color || 'white']};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.35)};
  border-radius: 1px;
  box-shadow: 1px 1px 2px #444;
`;
