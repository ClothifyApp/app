import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SolidButton, FlatButton } from '../base/Buttons';
import Drawer from './components/Drawer';
import { headerIconButtons } from './constants';

import { Header, Main } from './styled';

import Logo from '../../assets/images/logo.svg';

export default function Layout({ children, isAuth }) {
  const [drawerOptions, setDrawerOptions] = useState({});

  const handleOpenDrawer = (content, title) => {
    setDrawerOptions({ title, content });
  };

  const handleCloseDrawer = () => setDrawerOptions({});

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
          {headerIconButtons.map(({ icon, color, component, title }) => (
            <FlatButton
              color={color}
              onClick={() => handleOpenDrawer(component, title)}
            >
              <FontAwesomeIcon icon={icon} size='lg'></FontAwesomeIcon>
            </FlatButton>
          ))}
        </nav>
      </Header>
      <Main>{children}</Main>
      <Drawer
        open={Boolean(drawerOptions.content)}
        onClose={handleCloseDrawer}
        title={drawerOptions.title}
      >
        {drawerOptions.content}
      </Drawer>
    </>
  );
}
