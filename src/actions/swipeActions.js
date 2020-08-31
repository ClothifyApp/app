/* eslint-disable import/prefer-default-export */
import { getFeed, doReaction } from '../api';
import { setLoading, setNotification } from './globalActions';
import { notificationTypes } from '../components/Notification/constants';
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
  try {
    await doReaction(type, garmentId);
    dispatch(getTopGarment());
  } catch (error) {
    if (error.response && error.response.data.error.id === 'SUPERLIKE_RESTRICTION') {
      dispatch(setNotification(
        notificationTypes.warning,
        'Espera un poco!',
        'Aún no puedes dar super like.',
      ));
    } else {
      dispatch(setNotification(
        notificationTypes.error,
        'Oops!',
        'Algo salió mal con tu reacción',
      ));
    }
  }
};

export const getGarments = () => async (dispatch) => {
  dispatch(setLoading(true));

  const garments = await getFeed();

  dispatch(setLoading(false));
  dispatch(getGarmentsAction(garments));
  dispatch(getTopGarment());
};
