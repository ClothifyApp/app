import React, { useState } from 'react';

import BaseModal from '../components/modals/Base';
import { Button } from '../components/base/Buttons';
import {
  MainWrapper,
  LetsGoWrapper,
  MainImageWrapper,
} from '../components/base/Wrappers';
import AskNumber from '../components/modals/AskNumber';
import VerifyCode from '../components/modals/VerifyCode';

import LoginIlustration from '../assets/images/login.svg';

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showClose, setShowClose] = useState(true);
  const [showBack, setShowBack] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <>
      <BaseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        showClose={showClose}
        showBack={showBack}
      >
        {/* <AskNumber /> */}
        <VerifyCode />
      </BaseModal>
      <MainWrapper>
        <MainImageWrapper>
          <img
            src={LoginIlustration}
            alt='Ilustración de login con logo de Clothify'
          />
        </MainImageWrapper>
        <LetsGoWrapper>
          <h2>El verdadero amor está en la prenda que buscas!</h2>
          <Button onClick={handleOpenModal}>Let's go!</Button>
        </LetsGoWrapper>
      </MainWrapper>
    </>
  );
}
