import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';

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

const TopBar = ({ classes, history, logged }) => {

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.paper}>
        <Toolbar className={classes.toolbar}>
          <Logo />
          <div>
            <Button
              size="small"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => { history.push(`/login`) }}
            >
             entrar
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

export default withRouter(withIndexStyle(TopBar));
