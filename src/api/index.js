import axios from 'axios';

const clothifyService = axios.create({
  baseURL: process.env.REACT_APP_CLOTHIFY_API_URL,
});

export const setToken = (token) => {
  clothifyService.defaults.headers['x-access-token'] = token;
};

export const getUser = async (userId) => {
  const { data } = clothifyService.get(`users/${userId}`);
  return data.data.user;
};

console.log('process.env.REACT_APP_CLOTHIFY_API_URL', process.env.REACT_APP_CLOTHIFY_API_URL);

export default clothifyService;
