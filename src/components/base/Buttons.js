import styled from 'styled-components';
import { flexCenter, buttonMixin } from '../base/Mixins';

export const Button = styled.button`
  ${buttonMixin};
  border-radius: 100px;
  background: ${getColor('gradient')};
  color: ${(props) => props.theme.colors.white};
  margin: ${(props) => props.margin || ''};
  padding: 8px 35px;
  font-size: 18px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const OutlinedButton = styled(Button)`
  border: 2px solid ${getColor('gradient')};
  background: transparent;
  color: ${getColor('primary')};
`;

export const SolidButton = styled(Button)`
  background: ${getColor('white')};
  color: ${getColor('primary')};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: 8px;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

export const WhatsAppButton = styled(Button)`
  color: ${getColor('white')};
  background: ${getColor('green')};
  &:hover {
    background: ${getColor('greenLigth')};
  }
  & svg {
    margin-left: 5px;
  }
`;

export const ReactionButton = styled.button`
  ${buttonMixin};
  ${flexCenter};
  width: ${({ size }) => (size === 'sm' ? '40px' : '60px')};
  height: ${({ size }) => (size === 'sm' ? '40px' : '60px')};
  color: ${getColor('primary')};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  text-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: 50%;
  &:hover {
    opacity: 0.97;
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

export const FlatButton = styled.button`
  ${buttonMixin};
  padding: 10px;
  color: ${getColor('secondary')};
  letter-spacing: 1px;
  text-transform: uppercase;
  background: transparent;
`;

export const TopButton = styled.button`
  ${buttonMixin};
  ${flexCenter};
  position: ${(props) => props.z_index || 'absolute'};
  top: 0;
  ${(props) => props.position || 'left'}: 0;
  margin: ${(props) => props.margin || '20px'};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: ${getColor('black')};
  border: 2px solid ${getColor('greyLighter')};
`;

function getColor(defaultColor) {
  return (props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors[defaultColor];
}
