import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { SolidButton, FlatButton } from './base/Buttons';

import Logo from '../assets/images/logo.svg';

const Header = styled.header`
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.sizes.navbarHeight}px;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  & img {
    height: ${({ theme }) => theme.sizes.navbarHeight - 15}px;
  }
  & nav a,
  nav button {
    margin-left: 15px;
  }
`;

export default function Layout({ children, isAuth }) {
  return (
    <>
      <Header>
        <Link to='/'>
          <img src={Logo} alt='Clothify' />
        </Link>
        <nav>
          <SolidButton as={Link} to={'/whatever'}>
            Mis Posts
          </SolidButton>
          <FlatButton color='primary'>
            <FontAwesomeIcon icon={faBell} size='lg'></FontAwesomeIcon>
          </FlatButton>
          <FlatButton color='primary'>
            <FontAwesomeIcon icon={faUser} size='lg'></FontAwesomeIcon>
          </FlatButton>
        </nav>
      </Header>
      {children}
    </>
  );
}
