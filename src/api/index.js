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
export const createMyGarment = async (garment) => {
  const { data } = await clothifyService.post('/garments', garment);
  return data.data.garment;
}

// Matches
export const listMatches = async () => {
  const { data } = await clothifyService.get('/match/user/');
  return data.data.matches;
};

// Delete Garment
export const deleteGarment = async (garmentId) => {
  const { data } = await clothifyService.delete('/garments/'+ garmentId);
  return data.data.deletedCount;
}

export default clothifyService;
