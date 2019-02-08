import React from 'react';
import TempChart from "./TempChart";
import HumidityChart from "./HumidityChart";


class ForecastClass extends React.Component {
  render() {
    return [
      <TempChart key='temp'/>,
      <HumidityChart key='humidity'/>
    ]
  }
}

export default ForecastClass