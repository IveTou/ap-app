import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { Grid, Icon, Typography } from '@material-ui/core/';
import Calendar from 'react-calendar';

import EventCard from '../../components/event-card';

import { withEventsStyle } from './styles';

class Events extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { period: { start:  new Date() ,end: '' } };
  }

  render() {
    const { classes, content = {} } = this.props;
    const { events } = content;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item md={8} xs={12}>
            <EventCard asButton event={events[0]} />
          </Grid>
          <Grid item md={4} xs={12}>
            <Calendar
              className={classes.calendar}
              locale="pt-BR"
              nextLabel={<Icon>chevron_right</Icon>}
              next2Label={<Icon>last_page</Icon>}
              prevLabel={<Icon>chevron_left</Icon>}
              prev2Label={<Icon>first_page</Icon>}
              returnValue="range"
              selectRange
              onChange={p => this.setState({ period: { start: p[0], end: p[1] } })}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Events.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.object,
};

export default withEventsStyle(Events);
