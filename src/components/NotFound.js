import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  wrapper: {
    'backgroundColor': (props) => {
      return props.color
    },
    height: '100%',
  },
  label: {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}
};

const NotFound = (props) => {
  const {classes} = props;
  return (<div className={classes.wrapper}>
    <div className={classes.label}>NotFound</div>
  </div>)
};

export default injectSheet(styles)(NotFound)