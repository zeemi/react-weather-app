import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import {Bar, BarChart, CartesianGrid, Legend, Line, LineChart, XAxis, YAxis} from "recharts";


const styles = {};

class TempChartClass extends React.Component {

  static propTypes = {
    weatherInfo: PropTypes.object
  };

  render() {
    const {weatherInfo} = this.props;

    if (!weatherInfo || !weatherInfo.forecast) {
      return null
    }
    const {forecast} = weatherInfo;

    return (
      <div>
        <BarChart width={500} height={300} data={forecast.list.map((info) => {
          return {
            humidity: info.main.humidity,
          }
        })}>
          <XAxis dataKey="dt_txt"/>
          <YAxis unit="%"/>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
          <Bar name="wilgotność" dataKey="humidity" fill='lightblue'/>
          <Legend verticalAlign="bottom" height={36}/>
        </BarChart>

      </div>
    )
  }
}

export default injectSheet(styles)(TempChartClass)