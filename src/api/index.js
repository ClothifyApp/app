import axios from 'axios';

const clothifyService = axios.create({
  baseURL: process.env.REACT_APP_CLOTHIFY_API_URL,
});

export const setToken = (token) => {
  clothifyService.defaults.headers['x-access-token'] = token;
};

console.log('process.env.REACT_APP_CLOTHIFY_API_URL', process.env.REACT_APP_CLOTHIFY_API_URL);

export default clothifyService;
