import socketIOClient from 'socket.io-client';

const serviceURL = process.env.REACT_APP_CLOTHIFY_API_URL;
const socket = socketIOClient(serviceURL);
// eslint-disable-next-line import/prefer-default-export
export const connectToSocket = (token, next) => {
  socket.emit('join', { token }); // Join user room
  socket.on('join', () => {
    next();
  });
};

export const disconnect = (token) => {
  socket.emit('leave', { token });
};

export default socket;
