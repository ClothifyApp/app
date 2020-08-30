import Login from '../pages/Login';
import Posts from '../pages/Posts';
import Swipe from '../pages/Swipe';
import Profile from '../pages/Profile';

// Este es un arreglo donde irán todas las rutas de nuestra App ;)
const ROUTES = [
  {
    path: ['/', '/login', '/sign-up'], // could be an array or an string
    key: 'LOGIN',
    exact: true,
    component: Login,
    auth: false,
  },
  {
    path: ['/complete-profile'],
    key: 'COMPLETE_PROFILE',
    exact: true,
    component: Profile,
    auth: false,
  },
  {
    path: ['/posts'],
    key: 'POSTS',
    exact: true,
    component: Posts,
    auth: true,
  },
  {
    path: '/swipe',
    key: 'SWIPE',
    exact: true,
    component: Swipe,
    auth: true,
  },
];

export default ROUTES;
