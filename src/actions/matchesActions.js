/* eslint-disable import/prefer-default-export */

import { listMatches } from '../api';
import { SET_MATCHES } from './actionTypes';
import { notificationTypes } from '../components/Notification/constants';
import { setNotification } from './globalActions';

const setMatchesAction = (payload) => (
  {
    type: SET_MATCHES,
    payload,
  }
);

export const listMatchesAction = () => async (dispatch) => {
  try {
    const matches = await listMatches();
    dispatch(setMatchesAction(matches));
  } catch (error) {
    dispatch(setNotification(
      notificationTypes.error,
      'Hubo un problema trayendo tus matches',
      'Por favor recarga la página',
    ));
  }
};
