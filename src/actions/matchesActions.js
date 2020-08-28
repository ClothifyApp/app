/* eslint-disable import/prefer-default-export */

import { listMatches } from '../api';
import { SET_MATCHES } from './actionTypes';

const setMatchesAction = (payload) => (
  {
    type: SET_MATCHES,
    payload,
  }
);

export const listMatchesAction = () => async (dispatch) => {
  try {
    const matches = await listMatches();
    dispatch(setMatchesAction(matches));
  } catch (error) {
    console.error(error);
  }
};
