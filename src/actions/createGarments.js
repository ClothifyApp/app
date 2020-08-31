import { createMyGarment } from '../api';
import { setLoading, setNotification } from './globalActions';
import { CREATE_MY_GARMENT } from './actionTypes';
import { notificationTypes } from '../components/Notification/constants';

const createMyGarmentAction = (payload) => ({
  type: CREATE_MY_GARMENT,
  payload,
});

// eslint-disable-next-line import/prefer-default-export
export const createGarmentThunk = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const garment = await createMyGarment(data);
    dispatch(createMyGarmentAction(garment));
  } catch (error) {
    dispatch(setNotification(
      notificationTypes.error,
      'No pudimos guardar tu prenda :(',
      'Por favor intentalo de nuevo',
    ));
  } finally {
    dispatch(setLoading(false));
  }
};
