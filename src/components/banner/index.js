import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Typography } from '@material-ui/core/';

import Calendar from '../calendar';
import config from '../../config';
import { withIndexStyle } from './styles';

const defaultContent = {
  visible: true,
  title: 'ERA Games',
  description: 'Conheça o ESCAPE Subversão, o nosso mais novo live game',
  flyer: `${config.ASSETS_BASE_URI}/${config.ASSETS_BANNERS_PATH}/escape.jpg`,
  url: 'https://www.facebook.com/jogueescape/',
  place: '',
  time: '',
};

const Banner = ({ classes, content = defaultContent }) => {
  const { visible, title, description, flyer, url, place, time } = content;

  return(
    <a className={classes.wrapper} href={url} style={{ backgroundImage: `url('${flyer}')` }}>
      {visible && (
        <div className={classes.overlay} >
          <Typography
            className={classes.title}
            color="inherit"
            paragraph
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            className={classes.description}
            color="inherit"
            paragraph
            gutterBottom
          >
            {description}
          </Typography>
        </div>
      )}
      {place && time && (
        <div>
          <Calendar className={classes.calendar} />
          <div className={classes.timePlace}>
            <div>
              <Icon className={classes.icon}>place</Icon>
              <Typography variant="subheading" color="inherit" noWrap>
                {place}
              </Typography>
            </div>
            <div>
              <Icon className={classes.icon}>schedule</Icon>
              <Typography variant="subheading" color="inherit">
                {time}
              </Typography>
            </div>
          </div>
        </div>
      )}
    </a>
  );
}

Banner.propTypes = {
  classes: PropTypes.object,
  content: PropTypes.object,
};

export default withIndexStyle(Banner);
