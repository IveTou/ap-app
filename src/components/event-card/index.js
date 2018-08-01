import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import moment from 'moment';
import { Button, Card, CardContent, Typography, Icon } from '@material-ui/core/';

import Calendar from '../calendar';
import Ribbon from '../ribbon';

import { withIndexStyle } from './styles';

const EventCard = ({ asButton, event, classes, onClick, to }) => {
  const { name, location, place, flyer, start, end, status, discountLists = [] } = event;
  const startMoment = moment(start);
  const Component = asButton ? Button : Link;
  const rootClasses = classNames(classes.linkRoot, asButton && classes.buttonRoot);
  const cardClasses = classNames(classes.linkCard, asButton && classes.buttonCard);

  return (
    <Component to={to} onClick={onClick} className={rootClasses}>
      <Card className={cardClasses}>
        <div className={classes.cardMedia}>
          <div
            className={classes.cardImage}
            alt={`flyer do ${name}`}
            style={{ backgroundImage: `url("${flyer}")` }}
          />
          <Ribbon
            mini
            status={status}
            start={startMoment}
            end={moment(end)}
            discountLists={discountLists}
          />
        </div>
        <CardContent className={classes.cardContent}>
          {asButton && (
            <Calendar className={asButton && classes.calendar} date={startMoment} small />
            )}
          <Typography variant="subheading" className={classes.cardContentHeader}>
            {name}
          </Typography>
          {!asButton && (
            <div className={classes.cardContentInfo}>
              <Calendar date={startMoment} small />
              <Typography
                className={classes.cardContentInfoDetails}
                variant="body1"
                component="div"
              >
                <div>
                  <Icon className={classes.cardContentInfoDetailsIcon}>place</Icon>
                  <span> {place.name}</span>
                  {location &&
                    <span> {location.address}</span>
                  }
                </div>
                <div>
                  <Icon className={classes.cardContentInfoDetailsIcon}>schedule</Icon>
                  {startMoment.format(' HH:mm')}
                </div>
              </Typography>
            </div>
          )}
        </CardContent>
      </Card>
    </Component>
  );
};

EventCard.propTypes = {
  asButton: PropTypes.bool,
  classes: PropTypes.object,
  to: PropTypes.object,
  onClick: PropTypes.func,
  event: PropTypes.object,
};

export default withIndexStyle(EventCard);
