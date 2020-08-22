import Login from './../pages/Login';
import Posts from './../pages/Posts';
import Swipe from './../pages/Swipe';

// Este es un arreglo donde irán todas las rutas de nuestra App ;)
const ROUTES = [
  {
    path: ['/', '/login', 'sign-up'], // could be an array or an string
    key: 'LOGIN',
    exact: true,
    component: Login,
    auth: false,
  },
  {
    path: ['/posts'],
    key: 'POSTS',
    exact: true,
    component: Posts,
    auth: false,
  },
  {
    path: '/swipe',
    key: 'SWIPE',
    exact: true,
    component: Swipe,
    auth: false,
  },
];

export default ROUTES;
