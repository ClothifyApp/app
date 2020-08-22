import React from 'react';

import ProfileCompletion from '../modals/ProfileCompletion';
import { Button } from '../base/Buttons';
import Tags from '../modals/Tags';
import { Wrapper, Actions } from './styles';

export default function EditProfileContent() {
  return (
    <Wrapper>
      <ProfileCompletion />
      <Tags />

      <Actions>
        <Button color='secondary'>Cerrar sesión</Button>
        <Button>Eliminar Cuenta</Button>
      </Actions>
    </Wrapper>
  );
}
