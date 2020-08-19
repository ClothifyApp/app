import React from 'react';
import styled from 'styled-components';

import { Button } from '../base/Buttons';
import { FormField } from '../base/FormFields';
import { InfoText } from '../base/Texts';

const Wraper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  & div:first-child {
    width: 60px;
    margin-right: 10px;
  }
`;

export default function AskNumber() {
  return (
    <>
      <h2>Introduce tu número móvil</h2>
      <Wraper>
        <FormField>
          <select name='country' id=''>
            <option value='CO'>CO</option>
          </select>
        </FormField>
        <FormField>
          <div className='prefix'>+57</div>
          <input type='number' placeholder='Número de Teléfono' />
        </FormField>
      </Wraper>
      <InfoText>
        Here's going to be some amazing text describing exactly what's happeing,
        but so far let's pu this test text. I think that is going to work.
        However, let me know if you read it all.
      </InfoText>
      <Button>Continuar</Button>
    </>
  );
}
