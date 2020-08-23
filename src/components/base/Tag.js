import styled from 'styled-components';

const getColor = (inactiveColor, activeColor = 'gradient') => (props) => {
  if (props.active) {
    return props.theme.colors[activeColor];
  }
  return props.theme.colors[inactiveColor];
};

// eslint-disable-next-line import/prefer-default-export
export const Tag = styled.div`
  padding: 4px 10px;
  border-radius: 50px;
  margin: 4px;
  border: 1px solid ${getColor('grey')};
  background: ${getColor('white')};
  color: ${getColor('grey', 'white')};
  cursor: pointer;
`;
