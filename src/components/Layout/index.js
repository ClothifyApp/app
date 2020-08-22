import React, { useState, Component } from 'react';
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
    setDrawerOptions({ title, content: content });
  };

  const handleCloseDrawer = () => setDrawerOptions({});
  console.log(drawerOptions.content);
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
              key={title}
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
        {drawerOptions.content && <drawerOptions.content />}
      </Drawer>
    </>
  );
}
