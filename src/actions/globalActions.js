/* eslint-disable import/prefer-default-export */
import { SET_LOADING, SET_TAGS } from './actionTypes';

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const setTags = (tags) => ({
  type: SET_TAGS,
  payload: tags,
});
