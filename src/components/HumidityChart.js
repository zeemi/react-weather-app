import React from 'react';
import injectSheet from 'react-jss';
import {Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis} from "recharts";
import {CityContext} from "../libs/cityContext";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const styles = {  card: {
    margin: '8px',
  }};

class TempChartClass extends React.Component {
  render() {
    return (
      <CityContext.Consumer>
        {(weatherInfo) => {
          if (!weatherInfo || !weatherInfo.forecast) {
            return null
          }
          const {forecast} = weatherInfo;
          const {classes} = this.props;

          return (
            <Card className={classes.card}>
              <CardContent>
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
              </CardContent>
            </Card>
          )
        }}
      </CityContext.Consumer>
    );

  }
}

export default injectSheet(styles)(TempChartClass)