import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@material-ui/core/';

import Logo from '../logo';

import { withIndexStyle } from './styles';

const TopBar = ({ classes, logged }) => {

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.paper}>
        <Toolbar className={classes.toolbar}>
          <Logo />
          <div>
            <Button size="small" color="primary" className={classes.button}>entrar</Button>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              cadastro
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  logged: PropTypes.bool,
};

export default withIndexStyle(TopBar);
