

import { SET_LOADING, GET_GARMENTS, GET_TOP_GARMENT } from '../actions/actionTypes';

import {
  SET_LOADING,
  SET_TOKEN,
  SET_USER,
  LOGOUT,
  GET_GARMENTS,
  GET_TOP_GARMENT,
} from '../actions/actionTypes';

import initialState from './initialState';

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
        suggestions: null,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_GARMENTS:
      return {
        ...state,
        garments: action.payload,
      };
    case GET_TOP_GARMENT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
