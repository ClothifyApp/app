import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { TopButton } from '../base/Buttons';
import { Overlay, Modal } from './styled';

const Base = ({
  children,
  isOpen,
  onBack,
  onClose,
  showClose,
  showBack,
  position,
  transparent,
}) => (
  <Overlay position={position} open={isOpen}>
    <Modal transparent={transparent}>
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
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  onBack: PropTypes.func,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  showClose: PropTypes.bool,
  showBack: PropTypes.bool,
  position: PropTypes.string,
  transparent: PropTypes.bool,
};

Base.defaultProps = {
  isOpen: false,
  showBack: false,
  position: 'absolute',
  children: null,
  onBack: null,
  onClose: null,
  showClose: false,
  transparent: false,

};

export default Base;
