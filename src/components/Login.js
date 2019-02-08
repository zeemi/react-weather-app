import React from 'react';
import injectSheet from 'react-jss';
import Form from "./Form";
import {withRouter} from "react-router-dom";
import urlsPatterns from "../libs/urlsPatterns";
import {AuthContext} from "../libs/authContext";

const styles = {
  wrapper: {display: 'flex', justifyContent: 'center'}
};

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.wrapper}>
        <AuthContext.Consumer>
          {(authContext) => {
            return (
              <Form submitLabel={'Zaloguj'}
                    fieldsSchema={this.fieldsSchema = [
                      {
                        id: 'email',
                        label: 'Email',
                        validations: [{rule: 'required', error: 'To pole jest wymagane.'}, {
                          rule: 'email',
                          error: 'Wprowadz poprawny adres email'
                        }],
                        required: true,
                        autoComplete: 'email'
                      },

                      {
                        id: 'password',
                        password: true,
                        label: 'Hasło',
                        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
                        required: true,
                        autoComplete: 'off'
                      },
                    ]}
                    onSubmit={(fields) => {
                      return authContext.logUserIn(fields.email.value, fields.password.value).then(() => { //  fake api call
                        this.props.history.push(urlsPatterns.DASHBOARD)
                      });
                    }}/>
            )
          }}
        </AuthContext.Consumer>
      </div>);
  }
}


export default withRouter(injectSheet(styles)(Login))