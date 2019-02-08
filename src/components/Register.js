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
          {(authContext) => {
            return (
              <Form submitLabel={'Załóż konto'}
                    fieldsSchema={this.fieldsSchema = [
                      {
                        id: 'name',
                        label: 'Imię',
                        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
                        required: true,
                        autoComplete: 'name'
                      },
                      {
                        id: 'surname',
                        label: 'Nazwisko',
                        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
                        required: true,
                        autoComplete: 'family-name'
                      },
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
                        id: 'phone',
                        label: 'Nr telefonu',
                        validations: [{rule: 'required', error: 'To pole jest wymagane.'}, {
                          rule: 'phone',
                          error: 'Wprowadz poprawny numer telefonu'
                        }],
                        required: true,
                        autoComplete: 'tel'
                      },
                      {
                        id: 'street',
                        label: 'Ulica',
                        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
                        required: true,
                        autoComplete: 'street-address'
                      },
                      {
                        id: 'city',
                        label: 'Miejscowość',
                        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
                        required: true,
                        autoComplete: 'address-level2'
                      },
                      {
                        id: 'password',
                        password: true,
                        label: 'Hasło',
                        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
                        required: true,
                        autoComplete: 'off'
                      },
                      {
                        id: 'passwordConfirmation',
                        password: true,
                        label: 'Powtórz hasło',
                        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
                        required: true,
                        autoComplete: 'off'
                      },
                    ]}
                    onSubmit={(fields) => {
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