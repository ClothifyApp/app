import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setLoading as setLoadingAction } from '../actions/globalActions';

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
import ProfileCompletion from '../components/modals/ProfileCompletion';
import Tags from '../components/modals/Tags';

import LoginIlustration from '../assets/images/login.svg';
import { verifyUserPhone } from '../api';

const Main = ({ setLoading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [step, setStep] = useState(1);
  const router = useHistory();

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

      if (goNext) {
        setStep(step + 1);
      }
    } catch (err) {
      console.log('handleContinue -> err', err);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    try {
      setLoading(true);
      const authResponse = await verifyUserPhone(
        confirmationCode,
        verificationId,
      );
      setStep(step + 1);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => setStep(step - 1);

  const handleCreate = () => {
    router.push('/posts');
  };

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
        {step === 3 && <ProfileCompletion onContinue={handleVerifyCode} />}
        {step === 4 && <Tags onEnds={handleCreate} />}
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
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setLoading: setLoadingAction,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
