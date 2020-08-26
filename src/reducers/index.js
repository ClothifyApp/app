import { SET_LOADING, GET_GARMENTS, GET_TOP_GARMENT } from '../actions/actionTypes';

export default function rootReducer(state = {}, action) {
  switch (action.type) {
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
    case GET_TOP_GARMENT: {
      const garments = [...state.garments];
      const topGarment = garments.shift();
      return {
        ...state,
        topGarment,
        garments,
      };
    }
    default:
      return state;
  }
}
