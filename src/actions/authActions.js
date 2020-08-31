import { SET_USER, SET_TOKEN, LOGOUT } from './actionTypes';
import * as api from '../api';
import { connectToSocket } from '../services/socket';
import { notificationTypes } from '../components/Notification/constants';
import { setNotification } from './globalActions';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const _setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

const _logout = () => ({
  type: LOGOUT,
});

export const setToken = (token) => (dispatch) => {
  // Add header to services requests
  api.setToken(token);

  // Connect to socket
  connectToSocket(token);

  // Set token (state);
  dispatch(_setToken(token));
};

export const singIn = (confirmationCode, verificationId) => async (
  dispatch,
) => {
  try {
    const {
      data: { token, user },
    } = await api.verifyUserPhone(confirmationCode, verificationId);

    // Redux
    await dispatch(setUser(user));
    dispatch(setToken(token));
  } catch (error) {
    dispatch(setNotification(
      notificationTypes.error,
      'Hubo un problema verificando tu número',
      'Por favor intentalo de nuevo',
    ));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  api.setToken(null);

  dispatch(_logout());
};
