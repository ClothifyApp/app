import styled from 'styled-components';

export const Tag = styled.div`
  padding: 4px 10px;
  border-radius: 50px;
  margin: 4px;
  border: 1px solid ${getColor('grey')};
  background: ${getColor('white')};
  color: ${getColor('grey', 'white')};
  cursor: pointer;
`;

function getColor(inactiveColor, activeColor = 'gradient') {
  return (props) => {
    if (props.active) {
      return props.theme.colors[activeColor];
    }
    return props.theme.colors[inactiveColor];
  };
}
