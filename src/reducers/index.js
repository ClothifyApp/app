import { SET_LOADING } from '../actions/actionTypes';

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
