import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import injectSheet from 'react-jss';
import {validate} from "../libs/validationHelper";

const styles = {
  wrapper: {display: 'flex', justifyContent: 'center'},
  card: {maxWidth: '345px', margin: '24px'},
  submitButton: {margin: '24px 0'}
};

class Register extends React.Component {

  state = {
    submitInProgress: false,
    submitError: '',
    fields: {
      firstName: {
        label: 'Imię',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
        validationResult: {isValid: false, errors: []},
        required: true
      },
      lastName: {
        label: 'Nazwisko',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
        validationResult: {isValid: false, errors: []},
        required: true
      },
      email: {
        label: 'Email',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}, {
          rule: 'email',
          error: 'Wprowadz poprawny adres email'
        }],
        validationResult: {isValid: false, errors: []},
        required: true
      },
      phone: {
        label: 'Nr telefonu',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}, {
          rule: 'phone',
          error: 'Wprowadz poprawny numer telefonu'
        }],
        validationResult: {isValid: false, errors: []},
        required: true
      },
      street: {
        label: 'Ulica',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
        validationResult: {isValid: false, errors: []},
        required: true
      },
      city: {
        label: 'Miejscowość',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
        validationResult: {isValid: false, errors: []},
        required: true
      },
      password: {
        password: true,
        label: 'Hasło',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
        validationResult: {isValid: false, errors: []},
        required: true
      },
      passwordConfirmation: {
        password: true,
        label: 'Powtórz hasło',
        value: '',
        isDirty: false,
        validations: [{rule: 'required', error: 'To pole jest wymagane.'}],
        validationResult: {isValid: false, errors: []},
        required: true
      },
    }
  };

  handleChange = (propertyName) => {
    return (event) => {
      this.setState({
        fields: {
          ...this.state.fields,
          [propertyName]: {
            ...this.state.fields[propertyName],
            value: event.target.value,
            isDirty: true,
            validationResult: validate(event.target.value, this.state.fields[propertyName].validations)
          }
        }
      }, console.log('change', this.state))
    }
  };

  handleSubmit = (something) => {
    event.preventDefault();
    this.setState({submitError: '', submitInProgress: true});
    if (this.state.fields.password.value !== this.state.fields.passwordConfirmation.value){
      return this.setState({submitError: 'Hasło się nie zgadza', submitInProgress: false});
    }

    const validationsResults = Object.values(this.state.fields)
      .map((fieldData) => {
        return validate(fieldData.value, validations);
      });

    const validationIsComplete = validationsResults.every((result) => {
      return result.isValid
    });

    if (validationIsComplete) {
      console.log('redirection to login!')
    }
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.wrapper}>
        <Card className={classes.card}>
          <CardHeader title='Zarejestruj'/>
          <CardContent>
            <form className={classes.container} noValidate autoComplete="on" onSubmit={this.handleSubmit}>
              {Object.keys(this.state.fields).map((fieldName) => {
                return <TextField key={fieldName}
                                  label={this.state.fields[fieldName].label}
                  // autoComplete={'off'}
                                  required
                                  fullWidth
                                  error={this.state.fields[fieldName].isDirty && !this.state.fields[fieldName].validationResult.isValid}
                                  helperText={this.state.fields[fieldName].isDirty && this.state.fields[fieldName].validationResult.errors.join(' ')}
                                  value={this.state.fields[fieldName].value}
                                  onFocus={this.handleChange(fieldName)}
                                  onChange={this.handleChange(fieldName)}
                                  margin="normal"
                                  type={this.state.fields[fieldName].password ? 'password' : 'text '}
                />
              })
              }
              <div><Button fullWidth className={classes.submitButton} disabled={this.state.submitInProgress} type='submit' variant='contained'>Załóż konto</Button></div>
              {this.state.submitError ? <Typography color={'error'}>{this.state.submitError}</Typography>: null}
            </form>
          </CardContent>
        </Card>
      </div>)
  }
}


export default injectSheet(styles)(Register)