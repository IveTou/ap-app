import React from 'react';
import PropTypes from 'prop-types';
import { Button, List, ListItem, Popover, Typography } from '@material-ui/core/';
import { upperFirst } from 'lodash';
import classNames from 'classnames';
import moment from 'moment';
import 'moment/locale/pt-br';

import Calendar from '../calendar';
import config from '../../config';
import { withIndexStyle } from './styles';

const defaultContent = {
  title: 'ERA Games',
  subtitle: 'Conheça o ESCAPE Subversão, o nosso mais novo live game',
  flyer: `${config.ASSETS_BASE_URI}/${config.ASSETS_BANNERS_PATH}/escape.jpg`,
  url: '/',
};

const timeRender = (start, end) => {
  const now = moment();

  if (end < now  || start > moment().add(4, 'hours')) {
    return null;
  }

  return (start <= now && end >= now)
    ? { content: 'Acontecendo agora!', isNow: true }
    : { content: upperFirst(start.fromNow()), isNow: false };
}

const Banner = ({ classes, content = defaultContent, mini }) => {
  const { title, subtitle, flyer, place, location, start, end, url } = content;
  const startMoment = start && moment(start);
  const timeStatus = !mini && timeRender(start, end);

  const rootClasses = classNames(classes.root, mini && classes.miniRoot);
  const overlayClasses = classNames(classes.overlay, mini && classes.miniOverlay);
  const subtitleClasses = classNames(classes.subtitle, mini && classes.miniSubtitle);

  return(
    <a className={rootClasses} href={url} style={{ backgroundImage: `url('${flyer}')` }}>
      <div className={overlayClasses} >
        <Typography
          className={classes.title}
          color="inherit"
          paragraph
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          className={subtitleClasses}
          color="inherit"
          paragraph
          gutterBottom
        >
          {subtitle}
        </Typography>
        {startMoment && !mini && (
          <div>
            <div className={classes.placeTime}>
              <Calendar className={classes.calendar} date={startMoment} />
              <List className={classes.list} dense>
                {place &&
                  <div>
                    <ListItem className={classes.listItem}>
                      <a href={place.url} className={classes.link}>
                        <Typography color="inherit" variant="title">
                          {place.name}
                        </Typography>
                      </a>
                    </ListItem >
                    <ListItem className={classes.listItem}>
                      <Typography  color="inherit" variant="subheading">
                        {place.location.address}
                      </Typography>
                    </ListItem>
                  </div>
                }
                <ListItem className={classes.listItem}>
                  <Typography variant="headline" color="inherit" noWrap>
                    {startMoment.format(' HH:mm')}h&nbsp;&nbsp;
                  </Typography>
                  <Typography  variant="subheading" color="inherit" noWrap>
                    {timeStatus && `(${timeStatus.content})`}
                  </Typography>
                </ListItem>
              </List>
            </div>

            <div className={classes.action}>
              <Button color="inherit">
                {timeStatus.isNow ? '30 pessoas presentes' : ' 300 interessadas'}
              </Button>
              <Button variant="outlined" size="small" color="inherit" className={classes.button}>
                Tenho Interesse
              </Button>
            </div>
          </div>
        )}
      </div>
    </a>
  );
}

Banner.propTypes = {
  classes: PropTypes.object,
  content: PropTypes.object,
};

export default withIndexStyle(Banner);
