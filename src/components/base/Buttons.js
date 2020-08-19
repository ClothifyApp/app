import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 100px;
  background: ${getColor('gradient')};
  color: ${(props) => props.theme.colors.white};
  padding: 8px 35px;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: 0;
  cursor: pointer;
  outline: none;
`;

export const FlatButton = styled.button`
  padding: 10px;
  color: ${getColor('secondary')};
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
  border: 0;
  background: transparent;
  cursor: pointer;
`;

export const OutlinedButton = styled(Button)`
  border: 2px solid ${getColor('gradient')};
  background: transparent;
  color: ${getColor('gradient')};
`;

function getColor(defaultColor) {
  return (props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors[defaultColor];
}
