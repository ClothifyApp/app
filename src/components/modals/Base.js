import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { TopButton } from '../base/Buttons';
import { flexCenter } from '../base/Mixins';

const Overlay = styled.dialog`
  ${flexCenter};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border: 0;
  cursor: pointer;
`;

const Modal = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 15px;
  padding: 35px 25px;
  padding-top: 60px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.regular};
  text-align: center;
  border-radius: 10px;
  cursor: auto;
`;

export default function Base({
  children,
  isOpen,
  onBack,
  onClose,
  showClose,
  showBack,
}) {
  return (
    <Overlay open={isOpen}>
      <Modal>
        {showBack && (
          <TopButton position='left' onClick={onBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </TopButton>
        )}
        {showClose && (
          <TopButton position='right' onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </TopButton>
        )}
        {children}
      </Modal>
    </Overlay>
  );
}
