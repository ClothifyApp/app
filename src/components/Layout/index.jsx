import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import { SolidButton, FlatButton } from '../base/Buttons';
import Drawer from './components/Drawer';
import { headerIconButtons } from './constants';

import { Header, Main, LogoComplement } from './styled';

import Logo from '../../assets/images/logo.svg';
import LogoText from '../../assets/images/Clothify.svg';

const Layout = ({ children }) => {
  const [drawerOptions, setDrawerOptions] = useState({});

  const handleOpenDrawer = (content, title) => {
    setDrawerOptions({ title, content });
  };

  const handleCloseDrawer = () => setDrawerOptions({});
  return (
    <>
      <Header>
        <Link to="/">
          <img src={Logo} alt="ClothifyLogo" height="120" />
          <LogoComplement src={LogoText} alt="Clothify" width="100" />
        </Link>
        <nav>
          <SolidButton as={Link} to="/posts">
            Mis Posts
          </SolidButton>
          {headerIconButtons.map(({
            icon, color, component, title,
          }) => (
            <FlatButton
              key={title}
              color={color}
              onClick={() => handleOpenDrawer(component, title)}
            >
              <FontAwesomeIcon icon={icon} size="lg" />
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
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
