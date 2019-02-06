import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import injectSheet from 'react-jss';
import cityMapping from "../libs/openWeatherMapWrapper/cityMapping";

const styles = {
  formControl: {
    margin: '8px',
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: `${4 * 2}px`,
  },};

class CityPickerClass extends React.Component {
  static propTypes = {
    chosenCityId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number]),
    onChange: PropTypes.func.isRequired
  };


  handleChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    const {classes, chosenCityId} = this.props;

    return <div>
      <form className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="city-select">Miasto</InputLabel>
          <Select
            value={chosenCityId}
            onChange={this.handleChange}
            inputProps={{
              name: 'cityId',
              id: 'city-select',
            }}
          >
            {cityMapping.map((cityDefinition) => {
              return <MenuItem key={cityDefinition.id} value={cityDefinition.id}>{cityDefinition.name}</MenuItem>
            })}
          </Select>
        </FormControl>
      </form>
    </div>
  }
}

export default injectSheet(styles)(CityPickerClass)



