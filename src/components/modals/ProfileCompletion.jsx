import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  faUser,
  faVenusMars,
  faMapMarked,
} from '@fortawesome/free-solid-svg-icons';

import { Button } from '../base/Buttons';
import ProfileInput from '../ProfileInput';
import Pic from '../Posts/Pictures';
import { DataWrapper } from './styled';

const ProfileCompletion = ({ userData, updateUser, onContinue }) => {
  const [internalUser, setInternalUser] = useState({ ...userData });
  const handleOnChange = ({ target }) => {
    setInternalUser({ ...internalUser, [target.name]: target.value });
    if (!onContinue) {
      updateUser({ ...userData, [target.name]: target.value });
    }
  };

  const handleSelectImg = (imgArray) => {
    const photoUrl = imgArray.pop();
    if (onContinue) {
      setInternalUser({ ...internalUser, photoUrl });
    } else {
      updateUser({ ...userData, photoUrl });
    }
  };

  const buttonDisabled = onContinue
    ? !internalUser
      || !internalUser.fullName
      || !internalUser.gender
      || internalUser.gender === 'none'
    : !userData
      || !userData.fullName
      || !userData.gender
      || userData.gender === 'none';

  return (
    <>
      {onContinue && <h2>Completa tu perfil</h2>}
      <Pic
        arrayImg={[internalUser.photoUrl]}
        selectedImgUrl={internalUser.photoUrl}
        setArrayImg={handleSelectImg}
        margin="auto"
        width={120}
        height={120}
      />
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
            value={internalUser.gender || 'none'}
            onChange={handleOnChange}
          >
            <option disabled value="none">
              -- Selecciona una Opción --
            </option>
            <option value="M">Másculino</option>
            <option value="F">Femenino</option>
            <option value="N">No Binario</option>
          </select>
        </ProfileInput>
      </DataWrapper>
      {onContinue && (
        <Button
          onClick={() => onContinue(internalUser)}
          disabled={buttonDisabled}
        >
          Continuar
        </Button>
      )}
    </>
  );
};

ProfileCompletion.propTypes = {
  userData: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  onContinue: PropTypes.func,
};

ProfileCompletion.defaultProps = {
  onContinue: null,
};

export default ProfileCompletion;
