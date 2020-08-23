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

export const Main = styled.main`
  margin-top: ${({ theme }) => theme.sizes.navbarHeight}px;
`;
