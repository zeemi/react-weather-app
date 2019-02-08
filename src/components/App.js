import React from 'react';
import {routes} from '../routes'
import {renderRoutes} from "react-router-config";
import Navbar from "./Navbar";
import {AuthContext} from "../libs/authContext";

class App extends React.Component {
  state = {
    isLogged: false,
    loggedUserEmail: {},
    userDatabase: {},
    registerUser: (fields) => {
      return new Promise((resolve, reject) => {
        if (this.state.userDatabase[fields.email.value]) {
          return reject("Użytkownik już istnieje.")
        }
        if (fields.password.value !== fields.passwordConfirmation.value) {
          return reject('Hasła się nie zgadzają.')
        }
        this.setState({userDatabase: {...this.state.userDatabase, [fields.email.value]: fields}}, () => {
          resolve();})
      })
    },
    logUserIn: (email, password) => {
      this.setState()
    },

  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        <Navbar key='navbar'/>
        <div key='component'>{renderRoutes(routes)}</div>
      </AuthContext.Provider>
    )
  }
};

export default App