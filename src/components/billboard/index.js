import React from 'react';
import PropTypes from 'prop-types';
import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core/';
import { upperFirst } from 'lodash';
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

const Billboard = ({ classes, content = defaultContent }) => {
  const { title, subtitle, flyer, place, start, end, url } = content;
  const { location } = place || content;
  const startMoment = start && moment(start);
  const timeStatus = timeRender(start, end);

  return(
    <Grid container className={classes.root} >
      <Grid className={classes.flyer} item md={6} sm={12} style={{ backgroundImage: `url('${flyer}')` }} />
      <Grid item md={6} sm={12}>
        <div className={classes.content}>
          <Typography
            color="inherit"
            variant="display1"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            color="inherit"
            variant="subheading"
            gutterBottom
          >
            {subtitle}
          </Typography>
          <div className={classes.timePlace}>
            <Calendar className={classes.calendar} date={startMoment} />
            <List dense>
              <ListItem>
                <ListItemText 
                  primary={place ? place.name : location.address}
                  secondary={location.address}
                  className={classes.listItemText}
                />
              </ListItem> 
              <ListItem>
                <ListItemText 
                  primary={}
                  secondary={}
                  className={classes.listItemText}
                />
              </ListItem>  
            </List>
          </div>
        </div>  
        <div className={classes.actions}>
        </div>  
      </Grid>
    </Grid>
  );
}

Billboard.propTypes = {
  classes: PropTypes.object,
  content: PropTypes.object,
};

export default withIndexStyle(Billboard);
