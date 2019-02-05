import React from 'react';
import {routes} from '../routes'
import {renderRoutes} from "react-router-config";
import {Link} from "react-router-dom";
import urlsPatterns from "../libs/urlsPatterns";

const App = (props) => {
  return ([<div key={'menu'}>
    <Link to={urlsPatterns.DASHBOARD}>Dashbord</Link>
    <Link to={urlsPatterns.LOGIN}>Zaloguj</Link>
    <Link to={urlsPatterns.REGISTER}>Zarejestruj</Link>
  </div>, <div key={'component'}>{renderRoutes(routes)}</div>])
};

export default App