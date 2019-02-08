import React from 'react';
import CityPicker from "./CityPicker";
import {fetchCityInfo} from '../libs/openWeatherMapWrapper'
import {CircularProgress} from "@material-ui/core/es/index";
import injectSheet from 'react-jss';
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import '../libs/openWeatherMapWrapper';
import {CityContext} from '../libs/cityContext';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
    error: null,
    loading: false,
    chosenCityInfo: null
  };

  componentDidMount() {
    this.handleCityChange(3094802)
  }

  handleCityChange = (id) => {
    this.setState({chosenCityId: id, loading: true, chosenCityInfo: null});
    fetchCityInfo(id)
      .then((chosenCityInfo) => {
        this.setState({loading: false, chosenCityInfo})
      }).catch((error) => {
      this.setState({loading: false, error});
    })

  };

  render() {
    const {classes} = this.props;

    return (<div className={classes.container}>
      <CityPicker chosenCityId={this.state.chosenCityId} onChange={this.handleCityChange}/>
      {this.state.loading ? <CircularProgress/> : null}
      {!this.state.loading && this.state.error
        ? <div>
          <Typography>Coś poszło nie tak. <Button variant="contained" onClick={() => this.handleCityChange(this.state.chosenCityId)}>Spróbuj ponownie</Button></Typography>
        </div>
        : null}
      <CityContext.Provider value={this.state.chosenCityInfo}>
        <CurrentWeather/>
        <Forecast/>
      </CityContext.Provider>
    </div>)
  };
}

export default injectSheet(styles)(DashboardClass)