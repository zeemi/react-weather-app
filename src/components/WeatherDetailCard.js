import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
  card: {margin: '8px'},
  value: {textAlign: 'center'}
};

class WeatherDetailCard extends React.Component {
  static propTypes = {
    unit: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  render() {
    const {classes, unit, label, value} = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              {label}
            </Typography>
            <Typography className={classes.value} component="p">
              {value} {unit}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default injectSheet(styles)(WeatherDetailCard)