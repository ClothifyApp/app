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
}

export const verifyUserPhone = async (code, verificationId) => {
  try {
    const response = await clothifyService.post('/users/register', {
      code,
      verificationId,
    });

    return response.data;
  } catch (err) {
    return { error: err.response};
  }
};

export default clothifyService;
