import React from 'react';
import PropTypes from 'prop-types';

import Auth from '../../components/auth';
import { withIndexStyle } from './styles';

const Login = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Auth />
    </div>
  );
};

export default withIndexStyle(Login);
