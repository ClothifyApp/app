import styled from 'styled-components';

const getColor = (inactiveColor, activeColor = 'gradient') => (props) => {
  if (props.active) {
    return props.theme.colors[activeColor];
  }
  return props.theme.colors[inactiveColor];
};

export const WrapperTag = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: left;
`;

export const Tag = styled.div`
  padding: 4px 10px;
  border-radius: 50px;
  margin: 4px;
  border: 1px solid ${getColor('grey', 'primary')};
  background: ${getColor('white')};
  color: ${getColor('grey', 'white')};
  cursor: pointer;
`;
