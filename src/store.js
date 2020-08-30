import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialStore = {
  token: localStorage.getItem('token'),
  user: null,
  garments: [],
  isLoading: false,
  topGarment: {
    userId: {},
  },
  myGarments: [],
};

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(
  rootReducer,
  initialStore,
  applyMiddleware(thunk),
);
