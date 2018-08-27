import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import moment from 'moment';
import 'moment/locale/pt-br';

import { Grid, GridList, GridListTile, Icon, Button, Typography } from '@material-ui/core/';
import Calendar from 'react-calendar';

import EventCard from '../../components/event-card';

import { withEventsStyle } from './styles';

moment.locale('pt-br');

class Events extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { period: { start:  moment(), end: '' } };
  }

  periodFormat(start, end) {
    const isnSame = end && start.format('LL') !== end.format('LL');
    const first = isnSame && start.format('MMY') === end.format('MMY')
      ? start.format('D')
      : start.format('LL');
    const last = isnSame ? end.format('LL'): '';

    return `${first} ${last && ` até ${last}`}`;
  }

  renderCalendar(classes) {
    return (
      <Calendar
        className={classes.calendar}
        locale="pt-BR"
        nextLabel={<Icon>chevron_right</Icon>}
        next2Label={<Icon>last_page</Icon>}
        prevLabel={<Icon>chevron_left</Icon>}
        prev2Label={<Icon>first_page</Icon>}
        returnValue="range"
        onChange={p => this.setState({ period: { start: moment(p[0]), end: moment(p[1]) } })}
        onClickDay={d => this.setState({period: { start: moment(d)}})}
        selectRange
      />
    );
  }

  render() {
    const { classes, content = {} } = this.props;
    const { events } = content;
    const { period } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.cardsGrid}>
          <div className={classes.title}>
            <Typography variant="subheading">
              {this.periodFormat(period.start, period.end)}
            </Typography>
            <Button
              variant="fab"
              color="primary"
              className={classes.button}
              mini
              aria-label="Calendar"
            >
              <Icon>date_range</Icon>
            </Button>
          </div>
          <GridList className={classes.gridList} spacing={8} cols={3}>
            {events.map((event, index) => (
              <GridListTile className={classes.tile} key={index} style={{ width: 'auto' }}>
                <EventCard asButton event={event} />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <div>{this.renderCalendar(classes)}</div>
      </div>
    );
  }
}

Events.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.object,
};

export default withEventsStyle(Events);
