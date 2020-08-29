import axios from 'axios';

const clothifyService = axios.create({
  baseURL: process.env.REACT_APP_CLOTHIFY_API_URL,
});

// Auth
export const setToken = (token) => {
  clothifyService.defaults.headers['x-access-token'] = token;
};

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

export const updateUser = (user) => clothifyService.patch('/users', { ...user });

// My garments
export const listMyGarments = async () => {
  const { data } = await clothifyService.get('/garments/user/');
  return data.data.garments;
};

// My Feed
export const getFeed = async () => {
  const { data } = await clothifyService.get('/garments');
  return data.data.garments;
};

// Tags
export const getTags = async () => {
  const { data } = await clothifyService.get('/tags');
  return data.data.tags;
};

// Matches
export const listMatches = async () => {
  const { data } = await clothifyService.get('/match/user/');
  return data.data.matches;
};

export default clothifyService;
