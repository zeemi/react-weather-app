import React from 'react';
import injectSheet from 'react-jss';
import Form from "./Form";
import {withRouter} from "react-router-dom";
import urlsPatterns from "../libs/urlsPatterns";

const styles = {
  wrapper: {display: 'flex', justifyContent: 'center'},
  card: {maxWidth: '345px', margin: '24px'},
  submitButton: {margin: '24px 0'}
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.fieldsSchema = [
      {
        id: 'name',
        label: 'Imię',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
        validationResult: {isValid: false, errors: []},
        required: true,
        autoComplete: 'name'
      },
      {
        id: 'surname',
        label: 'Nazwisko',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
        validationResult: {isValid: false, errors: []},
        required: true,
        autoComplete: 'family-name'
      },
      {
        id: 'email',
        label: 'Email',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}, {
          rule: 'email',
          error: 'Wprowadz poprawny adres email'
        }],
        validationResult: {isValid: false, errors: []},
        required: true,
        autoComplete: 'email'
      },
      {
        id: 'phone',
        label: 'Nr telefonu',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}, {
          rule: 'phone',
          error: 'Wprowadz poprawny numer telefonu'
        }],
        validationResult: {isValid: false, errors: []},
        required: true,
        autoComplete: 'tel'
      },
      {
        id: 'street',
        label: 'Ulica',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
        validationResult: {isValid: false, errors: []},
        required: true,
        autoComplete: 'street-address'
      },
      {
        id: 'city',
        label: 'Miejscowość',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
        validationResult: {isValid: false, errors: []},
        required: true,
        autoComplete: 'address-level2'
      },
      {
        id: 'password',
        password: true,
        label: 'Hasło',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
        validationResult: {isValid: false, errors: []},
        required: true,
        autoComplete: 'off'
      },
      {
        id: 'passwordConfirmation',
        password: true,
        label: 'Powtórz hasło',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
        validationResult: {isValid: false, errors: []},
        required: true,
        autoComplete: 'off'
      },
    ]
  }

  handleSubmit = (fields) => {
    return new Promise((resolve, reject) => {
      //  fake api call

      if (fields.password.value !== fields.passwordConfirmation.value) {
        return reject('Hasła się nie zgadzają.')
      }

      // todo: add newly created user to base
      return resolve(this.props.history.push(urlsPatterns.LOGIN))
    })
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.wrapper}>
        <Form onSubmit={this.handleSubmit}/>
      </div>)
  }
}


export default withRouter(injectSheet(styles)(Register))