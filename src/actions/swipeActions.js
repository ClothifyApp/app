/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { getFeed, doReaction } from '../api';
import { setLoading } from './globalActions';
import { GET_GARMENTS, GET_TOP_GARMENT } from './actionTypes';

const getGarmentsAction = (payload) => (
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
  dispatch(setLoading(true));

  const garments = await getFeed();

  dispatch(setLoading(false));
  dispatch(getGarmentsAction(garments));
  dispatch(getTopGarment());
};
