import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { DrawerContainer, CloseArrow, Title, ContentContainer } from './styled';
const Drawer = ({ open, onClose, title, children }) => {
  return (
    <DrawerContainer open={open}>
      <CloseArrow onClick={onClose}>
        <FontAwesomeIcon icon={faChevronRight} size='lg'></FontAwesomeIcon>
      </CloseArrow>
      <Title>{title}</Title>
      <ContentContainer>{children}</ContentContainer>
    </DrawerContainer>
  );
};

export default Drawer;
