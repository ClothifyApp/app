/* eslint-disable import/prefer-default-export */

<<<<<<< HEAD
import { listMyGarments, deleteGarment, setToken } from '../api';
=======
import { listMyGarments } from '../api';
>>>>>>> 92c19a7154a93bca332991b94894677198916772
import { setLoading } from './globalActions';
import { LIST_MY_GARMENTS, DELETE_GARMENT } from './actionTypes';

const listMyGarmentsAction = (payload) => ({
  type: LIST_MY_GARMENTS,
  payload,
});

export const listMyGarmentsThunk = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const garments = await listMyGarments();
    dispatch(listMyGarmentsAction(garments));
  }catch (error) {
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
    if(deleteCount > 0){
      dispatch(deleteGarmentAction(garmentId));
    }
  }catch (error) {
    console.error(error);
  } finally {
    dispatch(setLoading(false));
  }
    
};
