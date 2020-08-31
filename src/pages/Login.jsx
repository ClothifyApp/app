import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as globalActions from '../actions/globalActions';
import * as authActions from '../actions/authActions';

import { firebaseApp } from '../services/firebase';

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
import { notificationTypes } from '../components/Notification/constants';

const Main = ({ setLoading, signIn, setNotification }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [step, setStep] = useState(1);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setStep(1);
  };

  const handleChangeNumber = ({ target }) => setPhoneNumber(target.value);

  const handleChangeCode = ({ target }) => setConfirmationCode(target.value);

  const handleSendSMS = async (recaptcha, goNext) => {
    try {
      setLoading(true);
      const confirmationResult = await firebaseApp
        .auth()
        .signInWithPhoneNumber(`+57${phoneNumber}`, recaptcha);
      setVerificationId(confirmationResult.verificationId);

      setNotification(
        notificationTypes.success,
        '¡Te enviamos un mensaje!',
        'Revisa tu teléfono e indícanos el código.',
      );

      if (goNext) {
        setStep(step + 1);
      }
    } catch (err) {
      setNotification(
        notificationTypes.error,
        'Opps!',
        'Hubo un problema enviando el código. Intenta de nuevo.',
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    signIn(confirmationCode, verificationId);
    return <Redirect to="/complete-profile" />;
  };

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
        {step === 1 && (
          <AskNumber
            value={phoneNumber}
            onChange={handleChangeNumber}
            onContinue={handleSendSMS}
          />
        )}
        {step === 2 && (
          <VerifyCode
            value={confirmationCode}
            phoneNumber={phoneNumber}
            onChange={handleChangeCode}
            onContinue={handleVerifyCode}
            onResend={handleSendSMS}
          />
        )}
      </BaseModal>
      <MainWrapper>
        <MainImageWrapper>
          <img
            src={LoginIlustration}
            alt="Ilustración de login con logo de Clothify"
          />
        </MainImageWrapper>
        <LetsGoWrapper>
          <h2>¡El verdadero amor está en la prenda que buscas!</h2>
          <Button onClick={handleOpenModal}>Comenzar</Button>
        </LetsGoWrapper>
      </MainWrapper>
    </>
  );
};

Main.propTypes = {
  setLoading: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setLoading: globalActions.setLoading,
    setNotification: globalActions.setNotification,
    signIn: authActions.signIn,
  },
  dispatch,
);

export default connect(null, mapDispatchToProps)(Main);
