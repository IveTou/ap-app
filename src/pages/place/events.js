import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { Grid, GridList, GridListTile, Icon, Typography } from '@material-ui/core/';
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
    const { period } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item md={9} xs={12}>
            <Typography variant="headline" gutterBottom>
              {period.start.toDateString()}
            </Typography>
            <GridList className={classes.grid} spacing={16} cols={3}>
              {events.map((event, index) => (
                <GridListTile className={classes.tile} key={index} style={{ width: 'auto' }}>
                  <EventCard asButton event={event} />
                </GridListTile>
              ))}
            </GridList>
          </Grid>
          <Grid item md={3} xs={12}>
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
