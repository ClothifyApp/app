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
  font-weight: 400;
  margin: 4px;
  border: 1px solid ${getColor('greyLighter')};
  background: ${getColor('white')};
  color: ${getColor('grey', 'white')};
  cursor: pointer;
`;
