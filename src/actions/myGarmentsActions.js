/* eslint-disable import/prefer-default-export */

import { listMyGarments } from '../api';
import { setLoading } from './globalActions';
import { LIST_MY_GARMENTS } from './actionTypes';

const listMyGarmentsAction = (payload) => ({
  type: LIST_MY_GARMENTS,
  payload,
});

export const listMyGarmentsThunk = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const garments = await listMyGarments();
    dispatch(listMyGarmentsAction(garments));
  } finally {
    dispatch(setLoading(false));
  }
  /* catch (error) {
    console.error(error);
  } */
};
