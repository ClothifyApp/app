/* eslint-disable import/prefer-default-export */
import api, { setToken } from '../api';
import { setLoading } from './globalActions';
import { GET_GARMENTS, GET_TOP_GARMENT } from './actionTypes';

const getGaementsAction = (payload) => (
  {
    type: GET_GARMENTS,
    payload,
  }
);

export const getTopGarment = () => (
  {
    type: GET_TOP_GARMENT,
  }
);

export const getGarments = () => async (dispatch) => {
  setToken(process.env.REACT_APP_TEST_TOKEN);
  dispatch(setLoading(true));

  const { data } = await api.get('garments');

  dispatch(setLoading(false));
  dispatch(getGaementsAction(data.data.garments));
  dispatch(getTopGarment());
};
