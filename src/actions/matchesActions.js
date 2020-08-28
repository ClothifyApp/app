/* eslint-disable import/prefer-default-export */

import { listMatches } from '../api';
import { SET_MATCHES } from './actionTypes';

const setMatchesAction = (payload) => (
  {
    type: SET_MATCHES,
    payload,
  }
);

export const ListMatches = () => async (dispatch) => {
  try {
    const garments = await listMatches();
    dispatch(setMatchesAction(garments));
  } catch (error) {
    console.error(error);
  }
};
