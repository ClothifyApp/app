import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../base/Buttons';
import { FormField } from '../base/FormFields';
import { InfoText } from '../base/Texts';

import { Wrapper } from './styled';

const AskNumber = ({ onContinue }) => (
  <>
    <h2>Introduce tu número móvil</h2>
    <Wrapper>
      <FormField>
        <select name="country" id="">
          <option value="CO">CO</option>
        </select>
      </FormField>
      <FormField>
        <div className="prefix">+57</div>
        <input type="number" placeholder="Número de Teléfono" />
      </FormField>
    </Wrapper>
    <InfoText>
      Here is going to be some amazing text describing exactly what is happening,
      but so far lets pu this test text. I think that is going to work.
      However, let me know if you read it all.
    </InfoText>
    <Button onClick={onContinue}>Continuar</Button>
  </>
);

AskNumber.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

export default AskNumber;
