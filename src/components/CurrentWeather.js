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

    if (!weatherInfo || !weatherInfo.weather) {
      return null;
    }
    const {weather} = weatherInfo;

    return (
      <div>
        <Card className={classes.headerCard}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {weather.name}‚ {weather.sys.country}
              </Typography>
            </CardContent>
        </Card>
        <div className={classes.detailsContainer}>
          <WeatherDetailCard label='Temperatura' unit='&deg;C' value={weather.main.temp}/>
          <WeatherDetailCard label='Wilgotność' unit='%' value={weather.main.humidity}/>
          <WeatherDetailCard label='Prędkość wiatru' unit='m/s' value={weather.wind.speed}/>
          <WeatherDetailCard label='Ciśnienie' unit='hPa' value={weather.main.pressure}/>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(CurrentWeatherClass)