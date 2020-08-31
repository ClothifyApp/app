import * as api from '../api';
/* eslint-disable import/prefer-default-export */
import {
  SET_LOADING,
  SET_TAGS,
  SET_NOTIFICATION,
  CLEAR_NOTIFICATION,
} from './actionTypes';

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

const _setTags = (tags) => ({
  type: SET_TAGS,
  payload: tags,
});

export const setNotification = (type, title, message) => ({
  type: SET_NOTIFICATION,
  payload: { type, title, message },
});

export const clearNotification = () => ({
  type: CLEAR_NOTIFICATION,
});

export const setTags = () => async (dispatch) => {
  dispatch(setLoading(true));
  const tagsResponse = await api.getTags();
  await dispatch(_setTags(tagsResponse));
  dispatch(setLoading(false));
};
