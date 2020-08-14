import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';

// Este es un arreglo donde irán todas las rutas de nuestra App ;)
const ROUTES = [
  {
    path: ['/', '/login'], // could be an array or an string
    key: 'LOGIN',
    exact: true,
    component: Login,
    auth: false,
  },
  {
    path: '/sign-up',
    key: 'SIGNUP',
    exact: true,
    component: SignUp,
    auth: false,
  },
];

export default ROUTES;
