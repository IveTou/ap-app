import React from 'react';
import PropTypes from 'prop-types';

import Auth from '../../components/auth';
import { withIndexStyle } from './styles';
import { Typography } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';

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

      <div className={classes.background}>
        <svg width="500" height="350">
          <polygon 
            id="topPolygon" 
            points="200,10 400,190 10,210" 
            style={{ fill: deepOrange[200] }} 
          />
          <animate 
            href="#topPolygon"
            attributeName="points"
            from="200,10 400,190 10,210"
            to="10,210 200,10 400,190" 
            dur="10s"
            repeatCount="indefinite" 
          />
          <polygon 
            id="bottomPolygon" 
            points="300,349 400,189 10,209" 
            style={{ fill: deepOrange[200] }} 
          />
          <animate 
            href="#bottomPolygon"
            attributeName="points"
            from="300,349 400,189 10,209"
            to="400,189 10,209 300,349" 
            dur="10s"
            repeatCount="indefinite"
          />
        </svg>
      </div> 
    </div>
  );
};

export default withIndexStyle(Login);
