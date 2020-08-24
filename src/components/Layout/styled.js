import styled from 'styled-components';
import device from '../base/device';

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 10px;
  display: flex;
  z-index: 1000;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.sizes.navbarHeight}px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  background: ${({ theme }) => theme.colors.white};
  & img {
    height: ${({ theme }) => theme.sizes.navbarHeight - 15}px;
  }
  & nav a,
  nav button {
    margin-left: 15px;
  }
  @media ${device.mobileL} {
    padding: 0 25px;
  }
`;

export const Main = styled.main`
  margin-top: ${({ theme }) => theme.sizes.navbarHeight}px;
`;

export const LogoComplement = styled.img`
  display: none;

  @media ${device.laptop} {
    display: inline;
  }
`;
