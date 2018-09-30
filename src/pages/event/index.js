import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { pageInfo } from './event-info';
import { withIndexStyle } from './styles';


class Event extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { selectedTab: 0 };
  }

  render() {
    const { classes } = this.props;
    const { avatar, name, followedBy, facebook, instagram } = pageInfo;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
        </div>

        <div className={classes.contentWrapper}>
          
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withIndexStyle(Event);
