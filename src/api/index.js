import axios from 'axios';

const clothifyService = axios.create({
  baseURL: process.env.REACT_APP_CLOTHIFY_API_URL,
});

console.log('process.env.REACT_APP_CLOTHIFY_API_URL', process.env.REACT_APP_CLOTHIFY_API_URL);

export default clothifyService;
