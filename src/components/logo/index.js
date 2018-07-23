import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withIndexStyle } from './styles';
import config from '../../config';

const Logo = ({ classes }) => {
  const imgSrc = `${config.ASSETS_BASE_URI}/core/site/orange_pin.png`;

  return (
    <img className={classes.root} alt="toakee logo" src={imgSrc} />
  );
};

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withIndexStyle(Logo);
