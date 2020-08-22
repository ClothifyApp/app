import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 25px;
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
`;

export const Drawer = styled.aside`
  position: fixed;
  top: ${({ theme }) => theme.sizes.navbarHeight}px;
  background: ${({ theme }) => theme.colors.white};
  bottom: 0;
  right: ${({ open }) => (open ? 0 : '-350px')};
  width: 320px;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  z-index: 10;
  transition: 0.3s;
`;

export const Main = styled.main`
  margin-top: ${({ theme }) => theme.sizes.navbarHeight}px;
`;
