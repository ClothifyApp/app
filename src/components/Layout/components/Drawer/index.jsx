import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import {
  DrawerContainer, CloseArrow, Title, ContentContainer,
} from './styled';

const Drawer = ({
  open, onClose, title, children,
}) => (
  <DrawerContainer open={open}>
    <CloseArrow onClick={onClose}>
      <FontAwesomeIcon icon={faChevronRight} size="lg" />
    </CloseArrow>
    <Title>{title}</Title>
    <ContentContainer>{children}</ContentContainer>
  </DrawerContainer>
);

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element,
};

Drawer.defaultProps = {
  title: '',
  children: null,
};

export default Drawer;
