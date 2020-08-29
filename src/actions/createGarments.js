import { createMyGarment } from '../api';
import { setLoading } from './globalActions';
import { CREATE_MY_GARMENT } from './actionTypes';

const createMyGarmentAction = (payload) => ({
  type: CREATE_MY_GARMENT,
  payload,
});

// eslint-disable-next-line import/prefer-default-export
export const createGarmentThunk = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const garment = await createMyGarment(data);
    console.log(garment)
    dispatch(createMyGarmentAction(garment));
  } finally {
    dispatch(setLoading(false));
  }
}; /* catch (error) {
    console.log(error);
}; */
