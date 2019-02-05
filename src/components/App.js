import React from 'react';
import {routes} from '../routes'
import {renderRoutes} from "react-router-config";
import Navbar from "./Navbar";

const App = (props) => {
  return ([<Navbar key='navbar'/>, <div key='component'>{renderRoutes(routes)}</div>])
};

export default App