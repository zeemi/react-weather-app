import React from 'react'
import Dashboard from "./components/Dashbord";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import urlsPatterns from "./libs/urlsPatterns";
import RequireLoginHOC from './components/RequireLoginHOC';

export const routes = [
  {
    path: urlsPatterns.DASHBOARD,
    exact: true,
    component: RequireLoginHOC(Dashboard),
  },
  {
    path: urlsPatterns.LOGIN,
    exact: true,
    component: Login
  },
  {
    path: urlsPatterns.REGISTER,
    component: Register,
  },
  {
    path: '*',
    component: () => (<NotFound color={'grey'}/>),
  }
];
