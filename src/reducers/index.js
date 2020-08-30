import {
  SET_LOADING,
  SET_TOKEN,
  SET_USER,
  LOGOUT,
  GET_GARMENTS,
  GET_TOP_GARMENT,
  LIST_MY_GARMENTS,
  SET_TAGS,
  SET_MATCHES,
  DELETE_GARMENT,
  CREATE_MY_GARMENT,
} from '../actions/actionTypes';

import initialState from './initialState';

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
      };
    case SET_USER:
      localStorage.setItem(
        'user',
        JSON.stringify({ ...state.user, ...action.payload }),
      );

      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: initialState.user,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_TAGS:
      return {
        ...state,
        tags: action.payload,
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
    case LIST_MY_GARMENTS:
      return {
        ...state,
        myGarments: action.payload,
      };
    case SET_MATCHES:
      return {
        ...state,
        matches: action.payload,
      };
    case DELETE_GARMENT:
      return {
        ...state,
        myGarments: state.myGarments.filter((garment) => action.payload !== garment._id),
      };
    case CREATE_MY_GARMENT:
      return {
        ...state,
        myGarments: [...state.myGarments, action.payload],
      };
    default:
      return state;
  }
}
