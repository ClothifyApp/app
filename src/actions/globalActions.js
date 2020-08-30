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

export const setTags = (tags) => ({
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
