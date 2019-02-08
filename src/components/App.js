import React from 'react';
import {routes} from '../routes'
import {renderRoutes} from "react-router-config";
import Navbar from "./Navbar";
import {AuthContext} from "../libs/authContext";

const App = (props) => {
  return (
    <AuthContext.Provider value={{isLogged: false, userId: 1}}>
      <Navbar key='navbar'/>
      <div key='component'>{renderRoutes(routes)}</div>
    </AuthContext.Provider>
  )
};

export default App