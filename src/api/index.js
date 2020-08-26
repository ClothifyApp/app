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
