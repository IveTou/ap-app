import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core/';
import 'moment/locale/pt-br';

import config from '../../config';
import { withIndexStyle } from './styles';

const defaultContent = {
  title: 'ERA Games',
  subtitle: 'Conheça o ESCAPE Subversão, o nosso mais novo live game',
  flyer: `${config.ASSETS_BASE_URI}/${config.ASSETS_BANNERS_PATH}/escape.jpg`,
  url: '/',
};

const Banner = ({ classes, content = defaultContent }) => {
  const { title, subtitle, flyer, url } = content;

  return(
    <a className={classes.root} href={url} style={{ backgroundImage: `url('${flyer}')` }}>
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
          className={classes.subtitle}
          color="inherit"
          paragraph
          gutterBottom
        >
          {subtitle}
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
