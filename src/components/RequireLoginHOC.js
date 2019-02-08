import React from 'react';
import {AuthContext} from "../libs/authContext";
import {Redirect} from "react-router-dom";
import urlsPatterns from "../libs/urlsPatterns"

const RequireLoginHOC = (WrappedComponent) => {
  return (
    class extends React.Component {
      static propTypes = {};

      render() {
        return (<AuthContext.Consumer>
            {(userData) => {
              if (!userData || !userData.isLogged) {
                return <Redirect to={`${urlsPatterns.LOGIN}?next=${window.location.pathname}`}/>
              }
              return <WrappedComponent {...this.props}/>
            }}
          </AuthContext.Consumer>
        )
      }
    }
  );
};
export default RequireLoginHOC;
