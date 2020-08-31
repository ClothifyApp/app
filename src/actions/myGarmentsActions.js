/* eslint-disable import/prefer-default-export */

import { listMyGarments, deleteGarment } from '../api';
import { setLoading, setNotification } from './globalActions';
import { LIST_MY_GARMENTS, DELETE_GARMENT } from './actionTypes';
import { notificationTypes } from '../components/Notification/constants';

const listMyGarmentsAction = (payload) => ({
  type: LIST_MY_GARMENTS,
  payload,
});

export const listMyGarmentsThunk = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const garments = await listMyGarments();
    dispatch(listMyGarmentsAction(garments));
  } catch (error) {
    dispatch(setNotification(
      notificationTypes.error,
      'Hubo un problema trayendo tus prendas',
      'Por favor intentalo de nuevo',
    ));
    console.error(error);
  } finally {
    dispatch(setLoading(false));
  }
};

const deleteGarmentAction = (payload) => ({
  type: DELETE_GARMENT,
  payload,
});

export const deleteGarmentThunk = (garmentId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const deleteCount = await deleteGarment(garmentId);
    if (deleteCount > 0) {
      dispatch(deleteGarmentAction(garmentId));
    }
  } catch (error) {
    dispatch(setNotification(
      notificationTypes.error,
      'Hubo un problema eliminando tu prenda',
      'Por favor intentalo de nuevo',
    ));
  } finally {
    dispatch(setLoading(false));
  }
};
