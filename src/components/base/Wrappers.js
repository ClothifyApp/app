import styled from 'styled-components';
import { flexCenter } from './Mixins';
import device from './device';

export const MainWrapper = styled.section`
  width: 100vw;
  min-height: calc(100vh - ${({ theme }) => theme.sizes.navbarHeight}px);
  display: grid;
  grid-template-columns: 1fr;
  @media ${device.tablet} {
    grid-template-columns: 1fr 480px;
  }
`;

export const LetsGoWrapper = styled.section`
  display: flex;
  height: 100%;
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
`;

export const MainImageWrapper = styled.div`
  ${flexCenter};
  height: auto;
  width: 100%;
  margin-top: 20px;
  & img {
    height: auto;
    max-width: 300px;
    object-fit: contain;
  }
  @media ${device.tablet} {
    width: 100%;
    padding: initial;
    height: calc(100vh - ${({ theme }) => theme.sizes.navbarHeight}px);
    margin: 0;
    & img {
      height: 60%;
      max-width: 100%;
    }
  }
`;
