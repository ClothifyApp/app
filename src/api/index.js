import axios from 'axios';

const clothifyService = axios.create({
  baseURL: process.env.REACT_APP_CLOTHIFY_API_URL,
});

export const setToken = (token) => {
  clothifyService.defaults.headers['x-access-token'] = token;
};

export const getUser = async (userId) => {
  const { data } = await clothifyService.get(`users/${userId}`);
  return data.data.user;
};

export const doReaction = async (type, garmentId) => {
  const reaction = {
    type,
    garmentId,
  };
  const { data } = await clothifyService.post('/reactions', reaction);

  return data.data.reaction;
};

export default clothifyService;
