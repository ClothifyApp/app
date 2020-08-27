/* eslint-disable import/prefer-default-export */

import { listMyGarments, setToken } from '../api';
import { setLoading } from './globalActions';
import { LIST_MY_GARMENTS } from './actionTypes';

const listMyGarmentsAction = (payload) => (
  {
    type: LIST_MY_GARMENTS,
    payload,
  }
);

export const listMyGarmentsThunk = () => async (dispatch) => {
  dispatch(setLoading(true));
  setToken(process.env.REACT_APP_TEST_TOKEN);
  try {
    const garments = await listMyGarments();
    dispatch(listMyGarmentsAction(garments));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setLoading(false));
  }
};
