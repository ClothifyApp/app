import styled from 'styled-components';
import { flexCenter } from './Mixins';
import device from './device';

export const MainWrapper = styled.section`
  width: 100vw;
  min-height: calc(100vh - ${({ theme }) => theme.sizes.navbarHeight}px);
  display: grid;
  grid-template-columns: 1fr;
  @media ${device.mobileL} {
    grid-template-columns: 1fr 480px;
  }
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
  height: auto;
  width: 100%;
  & img {
    height: auto;
    width: 100%;
    max-width: 450px;
    object-fit: contain;
  }
  @media (max-width: ${device.mobileL}) {
    width: 100%;
    height: 100vh;
    & img {
      height: 60%;
      max-width: 100%;
    }
  }
`;
