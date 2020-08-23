import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  min-height: 100%;
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  & button {
    margin-top: 10px;
  }
`;
