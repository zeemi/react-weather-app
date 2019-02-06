import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core/es/index";
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import WeatherDetailCard from "./WeatherDetailCard";

const styles = {
  headerCard: {
    margin: '8px',
    maxWidth: 345
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  detailsCard: {
  }
};

class CurrentWeatherClass extends React.Component {
  static propTypes = {
    weatherInfo: PropTypes.object
  };

  render() {
    const {classes, weatherInfo} = this.props;

    if (!this.props.weatherInfo) {
      return null;
    }

    return (
      <div>
        <Card className={classes.headerCard}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {weatherInfo.name}‚ {weatherInfo.sys.country}
              </Typography>
            </CardContent>
        </Card>
        <div className={classes.detailsContainer}>
          <WeatherDetailCard label='Temperatura' unit='&deg;C' value={weatherInfo.main.temp}/>
          <WeatherDetailCard label='Wilgotność' unit='%' value={weatherInfo.main.humidity}/>
          <WeatherDetailCard label='Prędkość wiatru' unit='m/s' value={weatherInfo.wind.speed}/>
          <WeatherDetailCard label='Ciśnienie' unit='hPa' value={weatherInfo.main.pressure}/>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(CurrentWeatherClass)