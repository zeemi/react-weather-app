import React from 'react';
import '../libs/openWeatherMapWrapper';
import CityPicker from "./CityPicker";
import {fetchCityInfo} from '../libs/openWeatherMapWrapper'
import {CircularProgress} from "@material-ui/core/es/index";
import injectSheet from 'react-jss';
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
};


class DashboardClass extends React.Component {
  state = {
    chosenCityId: '',
    loaded: false,
    loading: false,
    chosenCityInfo: null
  };

  handleCityChange = (id) => {
    this.setState({chosenCityId: id, loading: true});
    fetchCityInfo(id).then((chosenCityInfo) => {
      this.setState({loading: false, chosenCityInfo})
    })
  };

  render() {
    const {classes} = this.props;
    return (<div className={classes.container}>
      <CityPicker chosenCityId={this.state.chosenCityId} onChange={this.handleCityChange}/>
      {this.state.loading ? <CircularProgress/> : null}
      <CurrentWeather weatherInfo={this.state.chosenCityInfo}/>
      <Forecast weatherInfo={this.state.chosenCityInfo}/>
    </div>)
  };
}

export default injectSheet(styles)(DashboardClass)