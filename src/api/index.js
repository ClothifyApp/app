import axios from 'axios';

const savedToken = localStorage.getItem('token');

const clothifyService = axios.create({
  baseURL: process.env.REACT_APP_CLOTHIFY_API_URL,
  headers: {
    'x-access-token': savedToken,
  },
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
// Create Garment
<<<<<<< HEAD
export const createMyGarment = async (garment) => {
  const { data } = await clothifyService.post('/garments', garment);
  return data.data.garment;
}
=======
export const createMyGarment = async (data) => {
  const response = await clothifyService.post('/garments', data);
  return response.data.garment;
};
>>>>>>> 92c19a7154a93bca332991b94894677198916772

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

// Save Image Garment
export const uploadImage = async (data) => {
  const response = await clothifyService.post('/image/', data, {
    headers: {
      accept: 'application/json',
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      },
  });
  
  return response.data.data.imagePath;
}

export default clothifyService;
