import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { withIndexStyle } from './styles';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { selectedTab: 0 };
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
      </div>
    );
  }
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withIndexStyle(Auth);
