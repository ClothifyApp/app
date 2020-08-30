import socketIOClient from 'socket.io-client';

const serviceURL = process.env.REACT_APP_CLOTHIFY_API_URL;
// const socket = socketIOClient(serviceURL);

// eslint-disable-next-line import/prefer-default-export
export const connectToSocket = (token) => {
  // socket.emit('join', { token });
  // socket.on('join', (data) => console.log('Socket: connected!', data));
  // socket.on('match', (data) => console.log('Socket: matched!', data));
};

// Connect to socket with saved token
const savedToken = localStorage.getItem('token');

if (savedToken) {
  // connectToSocket(savedToken);
}
