/* eslint-disable no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';

import BaseModal from '../../../modals/Base';
import { Button } from '../../../base/Buttons';

const ConfirmDeletion = ({ isOpen, onClose, onDelete }) => (
  <BaseModal showClose isOpen={isOpen} onClose={onClose}>
    <h3>¿Estás seguro de que deseas eliminar tu usuario?</h3>
    <p>
      Te extrañaremos 
      <span role="img" aria-label="sad face">😔</span>
    </p>
    <Button color="pink" onClick={onDelete}>Eliminar</Button>
  </BaseModal>
);

ConfirmDeletion.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ConfirmDeletion;
