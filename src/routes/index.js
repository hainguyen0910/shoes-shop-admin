import Login from 'Pages/Login';
import Home from 'Pages/Home';
import Logout from 'Pages/test';

export const ADMIN_ROUTER = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'Login',
    path: '/login',
    exact: false,
    component: Login,
  },
  {
    name: 'Logout',
    path: '/logout',
    exact: false,
    component: Logout,
  },
];
