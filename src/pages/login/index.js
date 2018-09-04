import React from 'react';
import PropTypes from 'prop-types';

import Auth from '../../components/auth';
import { withIndexStyle } from './styles';
import { Typography } from '@material-ui/core';

const Login = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="display3" gutterBottom>
          Uma balada pode ser mais do que você imagina!
        </Typography>
        <Typography variant="display1">
          Expanda a experiência de estar numa balada, interaja com os espaços e aproveite ainda mais a sua festa!
        </Typography>
      </div>
      <Auth />
    </div>
  );
};

export default withIndexStyle(Login);
