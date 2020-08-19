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
import ProfileCompletion from '../components/modals/ProfileCompletion';
import Tags from '../components/modals/Tags';

import LoginIlustration from '../assets/images/login.svg';

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [step, setStep] = useState(4);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setStep(1);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleContinue = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <>
      <BaseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onBack={handleBack}
        showClose={step < 3}
        showBack={[2, 4].includes(step)}
      >
        {step === 1 && <AskNumber onContinue={handleContinue} />}
        {step === 2 && <VerifyCode onContinue={handleContinue} />}
        {step === 3 && <ProfileCompletion onContinue={handleContinue} />}
        {step === 4 && <Tags onContinue={handleContinue} />}
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
