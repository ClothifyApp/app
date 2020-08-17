import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 100px;
  background: ${getColor};
  color: ${(props) => props.theme.colors.white};
  padding: 10px 35px;
  font-weight: bold;
  font-size: 18px;
  border: 0;
  cursor: pointer;
  outline: none;
`;

export const OutlinedButton = styled(Button)`
  border: 2px solid ${getColor};
  background: transparent;
  color: ${getColor};
`;

function getColor(props) {
  return props.color
    ? props.theme.colors[props.color]
    : props.theme.colors.gradient;
}
