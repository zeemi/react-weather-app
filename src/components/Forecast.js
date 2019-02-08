import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import TempChart from "./TempChart";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import HumidityChart from "./HumidityChart";


const styles = {  headerCard: {
    margin: '8px',
  }};

class ForecastClass extends React.Component {

  static propTypes = {
    weatherInfo: PropTypes.object
  };

  render() {
    const {weatherInfo, classes} = this.props;
    if (!weatherInfo) {
      return null
    }

    return (
      <div>
        <Card className={classes.headerCard}>
          <CardContent>
            <TempChart weatherInfo={weatherInfo}/>
          </CardContent>
        </Card>
        <Card className={classes.headerCard}>
          <CardContent>
            <HumidityChart weatherInfo={weatherInfo}/>
          </CardContent>
        </Card>
      </div>

    )
  }
}

export default injectSheet(styles)(ForecastClass)