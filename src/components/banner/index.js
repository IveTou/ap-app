import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon, Typography } from '@material-ui/core/';

import Calendar from '../calendar';
import config from '../../config';
import { withIndexStyle } from './styles';

const defaultContent = {
  visible: true,
  title: 'ERA Games',
  description: 'Conheça o ESCAPE subversão, o nosso mais novo live game',
  flyer: `${config.ASSETS_BASE_URI}/${config.ASSETS_BANNERS_PATH}/escape.jpg`,
  url: '/',
  place: '',
  time: '',
};

const Banner = ({ classes, content = defaultContent }) => {
  const { visible, title, description, flyer, url, place, time } = content;

  return(
    <a className={classes.wrapper} href={url} style={{ backgroundImage: `url('${flyer}')` }} >
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
    </a>
  );
}

Banner.propTypes = {
  classes: PropTypes.object,
  content: PropTypes.object,
};

export default withIndexStyle(Banner);
