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


  state = {
    submitInProgress: false,
    submitError: '',
    fields: {
      name: {
        value: '',
        isDirty: false,
        validationResult: {isValid: false, errors: []},
      },
      surname: {
        value: '',
        isDirty: false,
        validationResult: {isValid: false, errors: []},
      },
      email: {
        value: '',
        isDirty: false,
        validationResult: {isValid: false, errors: []},
      },
      phone: {
        value: '',
        isDirty: false,
        validationResult: {isValid: false, errors: []},
      },
      street: {
        value: '',
        isDirty: false,
        validationResult: {isValid: false, errors: []},
      },
      city: {
        value: '',
        isDirty: false,
        validationResult: {isValid: false, errors: []},
      },
      password: {
        value: '',
        isDirty: false,
        validationResult: {isValid: false, errors: []},
      },
      passwordConfirmation: {
        value: '',
        isDirty: false,
        validationResult: {isValid: false, errors: []},
      },
    }
  };

  handleChange = (propertyName, validations) => {
    return (event) => {
      this.setState({
        fields: {
          ...this.state.fields,
          [propertyName]: {
            ...this.state.fields[propertyName],
            value: event.target.value,
            isDirty: true,
            validationResult: validate(event.target.value, validations)
          }
        }
      }, console.log('change', this.state))
    }
  };

  handleSubmit = (something) => {
    event.preventDefault();
    this.setState({submitError: '', submitInProgress: true});
    if (this.state.fields.password.value !== this.state.fields.passwordConfirmation.value) {
      return this.setState({submitError: 'Hasło się nie zgadza', submitInProgress: false});
    }

    const fieldsState = {}
    this.fieldsSchema.forEach((fieldDefinition) => {
      fieldsState[fieldDefinition.id] = {
        value: this.state.fields[fieldDefinition.id].value,
        isDirty: true,
        validationResult: validate(this.state.fields[fieldDefinition.id].value, fieldDefinition.validations)
      }
    });

    const isFormValid = Object.values(fieldsState).every((fieldState) => {
      return fieldState.validationResult.isValid
    });

    if (!isFormValid){
      return this.setState({fields: fieldsState, submitError: 'Popraw błędy powyżej', submitInProgress: false})
    }

    console.log('redirection to login!')
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.wrapper}>
        <Card className={classes.card}>
          <CardHeader title='Zarejestruj'/>
          <CardContent>
            <form className={classes.container} noValidate autoComplete="on" onSubmit={this.handleSubmit}>
              {this.fieldsSchema.map((fieldDefinition) => {
                return <TextField key={fieldDefinition.id}
                                  label={fieldDefinition.label}
                                  autoComplete={fieldDefinition.autoComplete}
                                  required
                                  fullWidth
                                  error={this.state.fields[fieldDefinition.id].isDirty && !this.state.fields[fieldDefinition.id].validationResult.isValid}
                                  helperText={this.state.fields[fieldDefinition.id].isDirty && this.state.fields[fieldDefinition.id].validationResult.errors.join(' ')}
                                  value={this.state.fields[fieldDefinition.id].value}
                                  onFocus={this.handleChange(fieldDefinition.id, fieldDefinition.validations)}
                                  onChange={this.handleChange(fieldDefinition.id, fieldDefinition.validations)}
                                  margin="normal"
                                  type={fieldDefinition.password ? 'password' : 'text '}
                />
              })
              }
              {this.state.submitError ? <Typography color={'error'}>{this.state.submitError}</Typography> : null}
              <div><Button fullWidth className={classes.submitButton} disabled={this.state.submitInProgress}
                           type='submit' variant='contained'>Załóż konto</Button></div>
            </form>
          </CardContent>
        </Card>
      </div>)
  }
}


export default injectSheet(styles)(Register)