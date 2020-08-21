import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { SolidButton, FlatButton } from './base/Buttons';

import Logo from '../assets/images/logo.svg';

const Header = styled.header`
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

const Drawer = styled.aside`
  position: fixed;
  top: ${({ theme }) => theme.sizes.navbarHeight}px;
  background: ${({ theme }) => theme.colors.white};
  bottom: 0;
  right: ${({ open }) => (open ? 0 : '-300px')};
  width: 270px;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  transition: 0.3s;
`;

const Main = styled.main`
  margin-top: ${({ theme }) => theme.sizes.navbarHeight}px;
`;

export default function Layout({ children, isAuth }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(!isDrawerOpen);

  return (
    <>
      <Header>
        <Link to='/'>
          <img src={Logo} alt='Clothify' />
        </Link>
        <nav>
          <SolidButton as={Link} to={'/posts'}>
            Mis Posts
          </SolidButton>
          <FlatButton color='primary' onClick={openDrawer}>
            <FontAwesomeIcon icon={faBell} size='lg'></FontAwesomeIcon>
          </FlatButton>
          <FlatButton color='primary' onClick={openDrawer}>
            <FontAwesomeIcon icon={faUser} size='lg'></FontAwesomeIcon>
          </FlatButton>
        </nav>
      </Header>
      <Main>{children}</Main>
      <Drawer open={isDrawerOpen}></Drawer>
    </>
  );
}
