import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../base/Buttons';
import { FormField } from '../base/FormFields';
import { InfoText } from '../base/Texts';

import { Wrapper } from './styled';
import { firebase } from '../../services/firebase';

const AskNumber = ({ onContinue, value, onChange }) => {
  const submitDisabled = value.length !== 10;
  const [recaptchaVerifier, setRechaptchaVerifier] = useState(null);

  useEffect(() => {
    const recaptcha = new firebase.auth.RecaptchaVerifier('send-button', {
      size: 'invisible',
    });

    setRechaptchaVerifier(recaptcha);
  }, []);

  const handleSubmit = () => onContinue(recaptchaVerifier, true);

  return (
    <>
      <h2>Introduce tu número telefónico</h2>
      <Wrapper>
        <FormField>
          <select name="country" id="">
            <option value="CO">CO</option>
          </select>
        </FormField>
        <FormField>
          <div className="prefix">+57</div>
          <input
            type="text"
            pattern="\d*"
            maxLength={10}
            placeholder="Eg: 3201234455"
            value={value}
            onChange={onChange}
          />
        </FormField>
      </Wrapper>
      <InfoText>
        Te enviaremos un SMS con el código de verificación al número telefónico
        que nos indiques.
      </InfoText>
      <Button id="send-button" onClick={handleSubmit} disabled={submitDisabled}>
        Continuar
      </Button>
    </>
  );
};
AskNumber.propTypes = {
  onContinue: PropTypes.func.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

AskNumber.defaultProps = {
  value: '',
};

export default AskNumber;
