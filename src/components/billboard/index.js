import React from 'react';
import { 
  Button,
  CircularProgress, 
  Grid, 
  List, 
  ListItem, 
  ListItemText, 
  Typography,  
} from '@material-ui/core/';
import { upperFirst } from 'lodash';
import moment from 'moment';
import 'moment/locale/pt-br';

import Calendar from '../calendar';
import Stories from '../../components/stories';
import config from '../../config';
import { withIndexStyle } from './styles';

const defaultContent = {
  title: 'ERA Games',
  subtitle: 'Conheça o ESCAPE Subversão, o nosso mais novo live game',
  flyer: `${config.ASSETS_BASE_URI}/${config.ASSETS_BANNERS_PATH}/escape.jpg`,
  url: '/',
};

const timeRender = (now, start, end) => {
  if (end < now  || start > moment().add(4, 'hours')) {
    return null;
  }

  return (start <= now && end >= now)
    ? { content: 'Acontecendo agora!', isNow: true }
    : { content: upperFirst(start.fromNow()), isNow: false };
}

const Billboard = ({ 
  classes, 
  content = defaultContent, 
  isLoading,
  stories, 
}) => {
  const { title, subtitle, flyer, place, start, end, url } = content;
  const { location } = place || content;
  const now = moment();
  const startMoment = start && moment(start);
  const timeStatus = timeRender(now, start, end);
  const itsNow = start <= now && end >= now;
  
  return(
    <Grid container className={classes.root} >
      <Grid  item md={6} sm={12} xs={12}>
        {!stories.length && (
          <div style={{ backgroundImage: `url('${flyer}')` }} className={classes.flyer}>
            {isLoading &&
              <CircularProgress 
                className={classes.progress} 
                color="primary"
                size={70} 
                thickness={7}
              />
            }
          </div>
        )}
        {!!stories.length && itsNow && (
          <Stories content={stories} />
        )}
      </Grid>  
      <Grid item md={6} sm={12} xs={12} className={classes.contentWrap}>
        <div className={classes.content}>
          <Typography
            color="inherit"
            variant="display1"
            className={classes.title}
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
                  primary={`${startMoment.format(' HH:mm')}h`}
                  secondary={timeStatus.content}
                  className={classes.inlineListItemText}
                />
              </ListItem>  
            </List>
          </div>
        </div>  
        <div className={classes.actions}>
          <Typography variant="title" color="primary" className={classes.people}>
            38 pessoas presentes
          </Typography>
          <Button variant="contained" color="primary" size="small">
            Tenho Interesse
          </Button>  
        </div>  
      </Grid>
    </Grid>
  );
}

export default withIndexStyle(Billboard);
