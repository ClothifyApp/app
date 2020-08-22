import React from 'react';
import styled from 'styled-components';
import {
  faUser,
  faMapMarked,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons';

import { Button } from '../base/Buttons';
import { CircularPhotoSelector } from '../base/FormFields';
import { ProfileInput } from '../ProfileInput';

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px ${({ margin }) => (margin ? '30px' : 0)};
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
`;

export default function ProfileCompletion({ onContinue }) {
  return (
    <>
      {onContinue && <h2>Completa tu perfil</h2>}
      <CircularPhotoSelector>
        <input type='file' />
      </CircularPhotoSelector>
      <DataWrapper margin={!!onContinue}>
        <ProfileInput icon={faUser} text='Nombre'>
          <input type='text' placeholder='Escribe tu nombre' />
        </ProfileInput>
        <ProfileInput icon={faMapMarked} text='País'>
          <input type='text' placeholder='Escribe tu país' disabled />
        </ProfileInput>
        <ProfileInput icon={faVenusMars} text='Género'>
          <select dir='rtl'>
            <option value=''>Másculino</option>
            <option value=''>Femenino</option>
            <option value=''>Otro</option>
            <option value=''>Prefiero no decirlo</option>
          </select>
        </ProfileInput>
      </DataWrapper>
      {onContinue && <Button onClick={onContinue}>Continuar</Button>}
    </>
  );
}
