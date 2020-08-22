import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

import EditProfileContent from '../EditProfileContent';
import { SolidButton, FlatButton } from '../base/Buttons';
import { Drawer, Header, Main } from './styles';

import Logo from '../../assets/images/logo.svg';

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
      <Drawer open={isDrawerOpen}>
        <EditProfileContent />
      </Drawer>
    </>
  );
}
