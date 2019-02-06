import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = {};

class ForecastClass extends React.Component {

  static propTypes = {
    weatherInfo: PropTypes.object
  };

  render() {

    return <div> chart 1 and chart 2</div>
  }
}

export default injectSheet(styles)(ForecastClass)