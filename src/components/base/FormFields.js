import styled from 'styled-components';

export const FormField = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 15px;
  color: ${(props) => props.theme.colors.grey};
  border-bottom: 1px solid ${(props) => props.theme.colors.greyLigther};
  outline: none;
  & .prefix {
    border-right: 1px solid ${(props) => props.theme.colors.greyLigther};
  }
  & input,
  & select {
    width: 100%;
    font-size: 16px;
    outline: none;
    font-weight: bold;
    border: 0;
  }
`;
