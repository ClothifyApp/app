import styled from 'styled-components';

export const Name = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
  font-family: 'Proxima nova';
  text-align: left;
`;

export const Entry = styled.input`
  width: 100%;
  height: ${(props) => props.height || '30px'};
  background: ${({ theme }) => theme.colors.whiteOpacity};
  border-radius: 4px;
  font-size: 16px;
  border: none;
  &:focus {
    border-color: 1px solid red;
    outline: none;
  }
`;
export const Text = styled.textarea`
  width: 100%;
  height: 60px;
  font-size: 16px;
  font-family: 'Proxima nova';
  background: ${({ theme }) => theme.colors.whiteOpacity};
  border-radius: 4px;
  border: none;

  &:focus {
    border-color: 1px solid red;
    outline: none;
  }
`;
