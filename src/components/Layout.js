import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../assets/images/logo.svg';

const Navbar = styled.nav`
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.sizes.navbarHeight}px;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  & img {
    height: ${({ theme }) => theme.sizes.navbarHeight - 15}px;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <Navbar>
        <Link to='/'>
          <img src={Logo} alt='Clothify' />
        </Link>
      </Navbar>
      {children}
    </>
  );
}
