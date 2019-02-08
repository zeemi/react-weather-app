import React from 'react';
import injectSheet from 'react-jss';
import Form from "./Form";
import {withRouter} from "react-router-dom";
import urlsPatterns from "../libs/urlsPatterns";
import {AuthContext} from "../libs/authContext";

const styles = {
  wrapper: {display: 'flex', justifyContent: 'center'},
  card: {maxWidth: '345px', margin: '24px'},
  submitButton: {margin: '24px 0'}
};

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.wrapper}>
        <AuthContext.Consumer>
          {(authContext)=> {
            return (
              <Form onSubmit={(fields) => {
                return authContext.registerUser(fields).then(() => { //  fake api call
                  this.props.history.push(urlsPatterns.LOGIN)
                });
              }}/>
            )
          }}
        </AuthContext.Consumer>
      </div>);
  }
}


export default withRouter(injectSheet(styles)(Register))