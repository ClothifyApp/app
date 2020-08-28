import axios from 'axios';

const clothifyService = axios.create({
  baseURL: process.env.REACT_APP_CLOTHIFY_API_URL,
});

// Feed
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

// Auth
export const setToken = (token) => {
  clothifyService.defaults.headers['x-access-token'] = token;
};

export const verifyUserPhone = async (code, verificationId) => {
  try {
    const response = await clothifyService.post('/users/register', {
      code,
      verificationId,
    });

    return response.data;
  } catch (err) {
    return { error: err.response };
  }
};

// My garments
export const listMyGarments = async () => {
  const { data } = await clothifyService.get('/garments/user/');
  return data.data.garments;
};

// Create Garment
export const createMyGarment = async (data) => {
  const response = await clothifyService.post('/garments', data);
  return response.data.garment;
};

export default clothifyService;
