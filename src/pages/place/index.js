import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { Avatar, AppBar, Button, Tab, Typography }  from '@material-ui/core/';
import Rating from '../../components/rating';
import { Facebook, Instagram, Linkedin } from '../../components/social-icons';

import { withIndexStyle } from './styles';

const pageInfo = {
  avatar: 'https://scontent.fssa2-1.fna.fbcdn.net/v/t1.0-9/32105083_1461921467240717_2863832073544663040_n.jpg?_nc_cat=0&oh=3c7f14d76ec0017e7025a183c3df36d5&oe=5BD73AD3',
  title: 'Guhan Music Bar',
  followers: 90,
  facebook: 'https://www.facebook.com/guhanmandarim/',
  instagram: 'https://www.instagram.com/guhanmandarim/',
};

class Place extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Avatar alt={pageInfo.title} src={pageInfo.avatar} className={classes.avatar} />
          <div className={classes.headerInfo}>
            <Typography className={classes.title}>{pageInfo.title}</Typography>
            <div className={classes.stats}>
              <Rating />
              <Typography align="center" variant="body1" color="primary">
                {`${pageInfo.followers} seguidores`}
              </Typography>
            </div>
            <div className={classes.action}>
              <Facebook url={pageInfo.facebook}/>
              <Instagram url={pageInfo.Instagram}/>
              <Linkedin url={pageInfo.Instagram}/>
              <Button variant="outlined" size="small" color="primary" className={classes.button}>
                Seguir
              </Button>
            </div>
          </div>
        </div>

        <div>
          <AppBar position="static" color="default">
          </AppBar>
        </div>

      </div>
    );
  }
}

Place.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withIndexStyle(Place);
