import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const InfoText = styled.p`
  margin: 5px 0 15px 0;
  font-size: 12px;
  text-align: justify;
  color: ${(props) => props.theme.colors.greyLighter};
  line-height: 1.1em;
`;
