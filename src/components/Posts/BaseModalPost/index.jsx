import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { TopButton } from '../../base/Buttons';
import { Overlay, Modal } from './styled';

const Base = ({
  children,
  isOpen,
  onBack,
  onClose,
  showClose,
  showBack,
  position,
}) => (
  <Overlay position={position} open={isOpen}>
    <Modal>
      {showBack && (
      <TopButton position="left" onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </TopButton>
      )}
      {showClose && (
      <TopButton position="right" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </TopButton>
      )}
      {children}
    </Modal>
  </Overlay>
);

Base.propTypes = {
  children: PropTypes.element.isRequired,
  onBack: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  showClose: PropTypes.bool.isRequired,
  showBack: PropTypes.bool,
  position: PropTypes.string.isRequired,
};

Base.defaultProps = {
  isOpen: false,
  showBack: false,
};

export default Base;
