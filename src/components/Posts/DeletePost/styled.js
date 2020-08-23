import styled from 'styled-components';

export const Div = styled.div`
  width: 190px;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(26, 22, 32, 0.2);
  padding: 15px 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::last-child {
    margin-top: 5px;
  }
`;

export const Title = styled.h1`
  font-family: 'Proxima nova';
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
`;
