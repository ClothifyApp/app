/* eslint-disable import/prefer-default-export */
import api, { setToken } from '../api';
import { GET_GARMENTS } from './actionTypes';

const getGaementsAction = (payload) => (
  {
    type: GET_GARMENTS,
    payload,
  }
);

export const getGarments = () => async (dispatch) => {
  setToken(process.env.REACT_APP_TEST_TOKEN);
  const { data } = await api.get('garments');
  console.log(data);
  dispatch(getGaementsAction(data));
};
