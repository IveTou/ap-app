import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Icon } from '@material-ui/core/';

import { withIndexStyle } from './styles';

const Rating = ({ classes, score }) => {
  declare var star;

  return (
    <div className={classes.root}>
      <Icon className={classes.icon}>star</Icon>
      <Icon className={classes.icon}>star</Icon>
      <Icon className={classes.icon}>star_half</Icon>
    </div>
  );
};

Rating.propTypes = {
  classes: PropTypes.object.isRequired,
  score: PropTypes.number,
};

export default withIndexStyle(Rating);
