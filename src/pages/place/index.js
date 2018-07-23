import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { withIndexStyle } from './styles';

class Place extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      </div>
    );
  }
}

Place.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withIndexStyle(Place);
