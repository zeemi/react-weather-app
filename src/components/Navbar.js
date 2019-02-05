import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import urlsPatterns from "../libs/urlsPatterns";
import {Link} from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  clearDecoration: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'inherit',
  }
};

class MenuAppBar extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    anchorEl: null,
  };


  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const {classes} = this.props;
    const {anchorEl} = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link className={`${classes.grow} ${classes.clearDecoration}`} to={urlsPatterns.DASHBOARD}>
              <Typography variant="h6" color="inherit">Dashbord</Typography>
            </Link>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <Link className={classes.clearDecoration} to={urlsPatterns.REGISTER}>
                  <MenuItem onClick={this.handleClose}>Zarejestruj</MenuItem>
                </Link>

                <Link className={classes.clearDecoration} to={urlsPatterns.LOGIN}>
                  <MenuItem onClick={this.handleClose}>Zaloguj</MenuItem>
                </Link>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default injectSheet(styles)(MenuAppBar);