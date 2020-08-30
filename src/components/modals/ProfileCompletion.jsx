import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  faUser,
  faVenusMars,
  faMapMarked,
} from '@fortawesome/free-solid-svg-icons';

import { Button } from '../base/Buttons';
import { CircularPhotoSelector } from '../base/FormFields';
import ProfileInput from '../ProfileInput';
import { DataWrapper } from './styled';

const ProfileCompletion = ({ userData, updateUser, onContinue }) => {
  useEffect(() => {
    updateUser({ ...userData, country: 'Colombia' }); // TODO: Multi country.
  }, []);

  const handleOnChange = ({ target }) => {
    updateUser({ ...userData, [target.name]: target.value });
  };

  const buttonDisabled = !userData || !userData.fullName || !userData.gender;

  return (
    <>
      {onContinue && <h2>Completa tu perfil</h2>}
      <CircularPhotoSelector>
        <input type="file" />
      </CircularPhotoSelector>
      <DataWrapper margin={!!onContinue}>
        <ProfileInput icon={faUser} text="Nombre">
          <input
            name="fullName"
            type="text"
            placeholder="Escribe tu nombre"
            value={userData.fullName}
            onChange={handleOnChange}
          />
        </ProfileInput>
        <ProfileInput icon={faMapMarked} text="País">
          <input
            type="text"
            placeholder="Selecciona tu país"
            value="Colombia"
            disabled
          />
        </ProfileInput>
        <ProfileInput icon={faVenusMars} text="Género">
          <select
            name="gender"
            dir="rtl"
            value={userData.gender}
            onChange={handleOnChange}
          >
            <option disabled selected value>
              -- Selecciona una Opción --
            </option>
            <option value="M">Másculino</option>
            <option value="F">Femenino</option>
            <option value="N">No Binario</option>
          </select>
        </ProfileInput>
      </DataWrapper>
      {onContinue && (
        <Button onClick={onContinue} disabled={buttonDisabled}>
          Continuar
        </Button>
      )}
    </>
  );
};

ProfileCompletion.propTypes = {
  userData: PropTypes.objectOf(PropTypes.string).isRequired,
  updateUser: PropTypes.func.isRequired,
  onContinue: PropTypes.func,
};

ProfileCompletion.defaultProps = {
  onContinue: null,
};

export default ProfileCompletion;
