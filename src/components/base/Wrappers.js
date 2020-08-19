import styled from 'styled-components';
import { flexCenter } from './Mixins';

const height = ' calc(100vh - 70px)';

export const MainWrapper = styled.main`
  width: 100%;
  height: ${height};
  display: grid;
  grid-template-columns: 1fr 500px;
`;

export const LetsGoWrapper = styled.section`
  display: flex;
  height: 100%;
  padding: 40px;
  padding-bottom: 115px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const MainImageWrapper = styled.div`
  ${flexCenter};
  width: 100%;
  height: ${height};
  background: #f6f6f6;
  & img {
    height: 60%;
    max-width: 100%;
    object-fit: contain;
  }
`;