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
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
export default Drawer;
