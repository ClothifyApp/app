import React from 'react';
import styled from 'styled-components';

import { FormField } from '../base/FormFields';
import { FlatButton, Button } from '../base/Buttons';
import { InfoText } from '../base/Texts';

const Strong = styled.strong`
  display: block;
  font-size: 14px;
`;

const Wrapper = styled.div`
  padding: 0 50px;
  & input {
    text-align: center;
  }
`;

export default function VerifyCode() {
  return (
    <>
      <h2>Introduce el código</h2>
      <Wrapper>
        <FormField>
          <input type='number' />
        </FormField>
        <Strong className='m-bottom-xs'>
          Introduce el número enviado a +573222497943
        </Strong>
      </Wrapper>
      <FlatButton>Reenviar</FlatButton>
      <InfoText>
        Here's going to be some amazing text describing exactly what's happeing,
        but so far let's pu this test text. I think that is going to work.
        However, let me know if you read it all.
      </InfoText>

      <Button>Continuar</Button>
    </>
  );
}
