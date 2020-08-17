import Main from './../pages/Main';

// Este es un arreglo donde irán todas las rutas de nuestra App ;)
const ROUTES = [
  {
    path: ['/', '/login', 'sign-up'], // could be an array or an string
    key: 'LOGIN',
    exact: true,
    component: Main,
    auth: false,
  },
];

export default ROUTES;
