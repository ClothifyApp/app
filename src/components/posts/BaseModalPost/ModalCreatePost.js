import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { TopButton } from '../../base/Buttons';
import { flexCenter } from '../../base/Mixins';

import { device } from '../device'

const Overlay = styled.dialog`
  ${flexCenter};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  position: ${(props) => props.position || 'fixed'};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border: 0;
  cursor: pointer;
  transition: 0.3s;
  overflow: ${(props) => props.overflow || '' };
  z-index: 10;
`;

const Modal = styled.div`
  position: relative;
  width:  400px;
  padding: 35px 25px;
  padding-top: 60px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.regular};
  text-align: center;
  border-radius: 10px;
  cursor: auto;
  @media ${device.mobileM}{
    width:  100%;
    height: auto;
    margin-top: 70px;
    overflow: auto;
  }
  @media ${device.mobileL}{
    width:  100%;
    height: auto;
    margin-top: 70px;
    overflow: auto;
  }
  @media ${device.laptop}{
    width:  460px;
    height: auto;
    margin-top: 70px;
    overflow: auto;
  }
  @media ${device.desktop}{
    width:  100%;
    max-width: 500px;
    height: auto;
    margin-top: 70px;
  }


`;

export default function Base({
  children,
  isOpen,
  onBack,
  onClose,
  showClose,
  showBack,
  position
}) {
  return (
    <Overlay position={position} open={isOpen}>
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
