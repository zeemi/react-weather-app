import React from 'react';
import injectSheet from 'react-jss';
import {CartesianGrid, Legend, Line, LineChart, XAxis, YAxis} from "recharts";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {CityContext} from "../libs/context";

const styles = {  card: {
    margin: '8px',
  }};

class TempChartClass extends React.Component {
  state = {
    displayTemp: true,
    displayTempMin: true,
    displayTempMax: true
  };

  handleSwitch = (property) => {
    return (event) => {
      this.setState({[property]: event.target.checked})
    };
  };

  render() {
    return (
      <CityContext.Consumer>
        {(weatherInfo) => {

          if (!weatherInfo || !weatherInfo.forecast) {
            return null
          }
          const {forecast} = weatherInfo;
          const {classes} = this.props;
          const {displayTemp, displayTempMin, displayTempMax} = this.state;

          return (
            <Card className={classes.card}>
              <CardContent>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.displayTemp}
                        onChange={this.handleSwitch('displayTemp')}
                        value="displayTemp"
                      />
                    }
                    label="Temperatura"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.displayTempMin}
                        onChange={this.handleSwitch('displayTempMin')}
                        value="displayTempMin"
                      />
                    }
                    label="Temperatura minimalna"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.displayTempMax}
                        onChange={this.handleSwitch('displayTempMax')}
                        value="displayTempMax"
                      />
                    }
                    label="Temperatura maksymalna"
                  />
                </FormGroup>
                <LineChart width={500} height={300} data={forecast.list.map((info) => {
                  return {
                    dt_txt: info.dt_txt,
                    temp: info.main.temp,
                    temp_min: info.main.temp_min,
                    temp_max: info.main.temp_max,
                  }
                })}>
                  <XAxis dataKey="dt_txt"/>
                  <YAxis unit="&deg;C"/>
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                  {displayTemp ? <Line name='temperatura' type="monotone" dataKey="temp" stroke="blue"/> : null}
                  {displayTempMin ?
                    <Line name='temperatura minimalna' type="monotone" dataKey="temp_min" stroke="green"/> : null}
                  {displayTempMax ?
                    <Line name='temperatura maksymalna' type="monotone" dataKey="temp_max" stroke="red"/> : null}
                  <Legend verticalAlign="bottom" height={36}/>
                </LineChart>
              </CardContent>
            </Card>

          )
        }}
      </CityContext.Consumer>
    )
  }
}

export default injectSheet(styles)(TempChartClass)