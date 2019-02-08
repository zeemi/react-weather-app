import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import TempChart from "./TempChart";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


const styles = {  headerCard: {
    margin: '8px',
  }};

class ForecastClass extends React.Component {

  static propTypes = {
    weatherInfo: PropTypes.object
  };

  render() {
    const {weatherInfo, classes} = this.props;

    return (
      <Card className={classes.headerCard}>
        <CardContent>
          <TempChart weatherInfo={weatherInfo}/>
        </CardContent>
      </Card>

    )
  }
}

export default injectSheet(styles)(ForecastClass)