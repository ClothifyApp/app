import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { FormField } from '../base/FormFields';
import { FlatButton, Button } from '../base/Buttons';
import { InfoText } from '../base/Texts';
import { VerifyCodeWrapper, Strong } from './styled';

import { firebase } from '../../services/firebase';

const VerifyCode = ({
  value, phoneNumber, onChange, onContinue, onResend,
}) => {
  const [recaptchaVerifier, setRechaptchaVerifier] = useState(null);

  useEffect(() => {
    const recaptcha = new firebase.auth.RecaptchaVerifier('resend-button', {
      size: 'invisible',
    });

    setRechaptchaVerifier(recaptcha);
  }, []);

  const handleResend = () => onResend(recaptchaVerifier);

  const submitDisabled = value.length !== 6;
  return (
    <>
      <h2>Introduce el código</h2>
      <VerifyCodeWrapper>
        <FormField>
          <input
            type="text"
            pattern="\d*"
            maxLength={6}
            placeholder="Eg: 444555"
            value={value}
            onChange={onChange}
          />
        </FormField>
        <Strong className="m-bottom-xs">
          ¡Te enviamos el código al +57
          {phoneNumber}
          !
        </Strong>
      </VerifyCodeWrapper>
      <FlatButton id="resend-button" onClick={handleResend}>
        Reenviar
      </FlatButton>
      <InfoText>
        Introduce arriba el código que te llegó por SMS para poder verificar que
        el número es válido y tuyo. ¡Cada vez falta menos para encontrar el amor
        en tu próxima prenda!
      </InfoText>

      <Button onClick={onContinue} disabled={submitDisabled}>
        Continuar
      </Button>
    </>
  );
};

VerifyCode.propTypes = {
  value: PropTypes.string,
  phoneNumber: PropTypes.string,
  onContinue: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onResend: PropTypes.func.isRequired,
};

VerifyCode.defaultProps = {
  value: '',
  phoneNumber: '',
};

export default VerifyCode;
