import React from 'react';
import PropTypes from 'prop-types';

import { FormField } from '../base/FormFields';
import { FlatButton, Button } from '../base/Buttons';
import { InfoText } from '../base/Texts';
import { VerifyCodeWrapper, Strong } from './styled';

const VerifyCode = ({ onContinue }) => (
  <>
    <h2>Introduce el código</h2>
    <VerifyCodeWrapper>
      <FormField>
        <input type="number" />
      </FormField>
      <Strong className="m-bottom-xs">
        Introduce el número enviado a +573222497943
      </Strong>
    </VerifyCodeWrapper>
    <FlatButton>Reenviar</FlatButton>
    <InfoText>
      Heres going to be some amazing text describing exactly whats happeing,
      but so far lets pu this test text. I think that is going to work.
      However, let me know if you read it all.
    </InfoText>

    <Button onClick={onContinue}>Continuar</Button>
  </>
);

VerifyCode.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

export default VerifyCode;
