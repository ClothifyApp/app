/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import api, { setToken, getUser, doReaction } from '../api';
import { setLoading } from './globalActions';
import { GET_GARMENTS, GET_TOP_GARMENT } from './actionTypes';

const getGaementsAction = (payload) => (
  {
    type: GET_GARMENTS,
    payload,
  }
);

const getTopGarmentsAction = (payload) => (
  {
    type: GET_TOP_GARMENT,
    payload,
  }
);

export const getTopGarment = () => async (dispatch, getState) => {
  const { garments } = getState();
  const topGarment = garments.shift();
  dispatch(getTopGarmentsAction({
    garments,
    topGarment,
  }));
};

export const makeReactionAction = (type, garmentId) => async (dispatch) => {
  await doReaction(type, garmentId);
  dispatch(getTopGarment());
};

export const getGarments = () => async (dispatch) => {
  // setToken(getState().token);
  // TODO change for real token
  setToken(process.env.REACT_APP_TEST_TOKEN);
  dispatch(setLoading(true));

  const { data } = await api.get('garments');

  dispatch(setLoading(false));
  dispatch(getGaementsAction(data.data.garments));
  dispatch(getTopGarment());
};
