import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 100px;
  background-color: ${getColor};
  color: ${(props) => props.theme.colors.white};
  padding: 10px 30px;
`;

export const OutlinedButton = styled(Button)`
  border: 2px solid ${getColor};
  background-color: transparent;
  color: ${getColor};
`;

function getColor(props) {
  return props.color
    ? props.theme.colors[props.color]
    : props.theme.colors.primary;
}
