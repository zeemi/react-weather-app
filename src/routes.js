import Dashboard from "./components/Dashbord";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import urlsPatterns from "./libs/urlsPatterns";

export const routes = [
  {
    path: urlsPatterns.DASHBOARD,
    exact: true,
    component: Dashboard,
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
    path:'*',
    component: NotFound,
  }
];
