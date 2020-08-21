import styled from 'styled-components';
import { flexCenter } from './Mixins';
export const MainWrapper = styled.main`
  width: 100%;
  height: 100vh;
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
  background-color: #fff;
`;

export const MainImageWrapper = styled.div`
  ${flexCenter};
  width: 100%;
  height: 100vh;
  z-index: -1;
  & img {
    height: 60%;
    max-width: 100%;
    object-fit: contain;
  }
`;
