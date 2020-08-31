import { SET_USER, SET_TOKEN, LOGOUT } from './actionTypes';
import * as api from '../api';
import { setNotification, setLoading } from './globalActions';
import { listMatchesAction } from './matchesActions';
import { connectToSocket, disconnect } from '../services/socket';
import { notificationTypes } from '../components/Notification/constants';

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

export const setToken = (token) => (dispatch, getState, { socket }) => {
  // Add header to services requests
  api.setToken(token);

  // Connect to socket
  connectToSocket(token, () => {
    socket.on('match', ({ data }) => {
      dispatch(
        setNotification(
          notificationTypes.match,
          '¡Hiciste match!',
          `Tienes ${data.garmets.length} prendas en común con ${data.userMatch.fullName}`,
        ),
      );

      dispatch(listMatchesAction());
    });

    socket.on('superlike', ({ data }) => {
      dispatch(
        setNotification(
          notificationTypes.superlike,
          '¡SUPERLIKE!',
          `A ${data.nameUser} le ha encantado tu ${data.garment}`,
        ),
      );

      dispatch(listMatchesAction());
    });
  });

  // Set token (state);
  dispatch(_setToken(token));
};

export const signIn = (confirmationCode, verificationId) => async (
  dispatch,
) => {
  try {
    dispatch(setLoading(true));
    const {
      data: { token, user },
    } = await api.verifyUserPhone(confirmationCode, verificationId);

    // Redux
    await dispatch(setUser(user));
    dispatch(setToken(token));
  } catch (error) {
    dispatch(
      setNotification(
        notificationTypes.error,
        'Hubo un problema verificando tu número',
        'Por favor intentalo de nuevo',
      ),
    );
  } finally {
    dispatch(setLoading(false));
  }
};

export const logout = () => (dispatch) => {
  const token = localStorage.getItem('token');
  disconnect(token); // Leave user room
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  api.setToken(null);

  dispatch(_logout());
};
