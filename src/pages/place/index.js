import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import SwipeableViews from 'react-swipeable-views';

import { Avatar, AppBar, Button, Tab, Tabs, Typography } from '@material-ui/core/';
import Rating from '../../components/rating';
import { Facebook, Instagram, Linkedin } from '../../components/social-icons';

import Main from './main';
import { withIndexStyle } from './styles';

const pageInfo = {
  avatar: 'https://scontent.fssa2-1.fna.fbcdn.net/v/t1.0-9/32105083_1461921467240717_2863832073544663040_n.jpg?_nc_cat=0&oh=3c7f14d76ec0017e7025a183c3df36d5&oe=5BD73AD3',
  title: 'Guhan\'s Cowork House',
  description: '<p>Guhan\'s Cowork House é um espaço especializado com projetos voltados para arte e cultura</p><p>Possui espaços pala palestras, reuniões, workshops, aulas e muito mais.</p>',
  followers: 90,
  categories: ['cowork','arte','cultura','louge','palestras'],
  facebook: 'https://www.facebook.com/guhanmandarim/',
  instagram: 'https://www.instagram.com/guhanmandarim/',
  address: 'Largo da dinha, Rio Vermelho, Salvador - BA',
  openAt: 'Aberto às terças e quintas, das 14h às 19h',
  coordinates: { lat: -13.011441, lng: -38.491617 },
};

class Place extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { selectedTab: 0 };
  }

  handleChangeTab = (event, selectedTab) => {
    this.setState({ selectedTab });
  };

  handleChangeTabIndex = index => {
    this.setState({ selectedTab: index });
  };

  render() {
    const { classes } = this.props;
    const { avatar, title, followers, facebook, instagram } = pageInfo;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Avatar alt={title} src={avatar} className={classes.avatar} />
          <div className={classes.headerInfo}>
            <Typography className={classes.title}>{title}</Typography>
            <div className={classes.stats}>
              <Rating />
              <Typography align="center" variant="body1" color="primary">
                {`${followers} seguidores`}
              </Typography>
            </div>
            <div className={classes.action}>
              <Facebook url={facebook} size={32} />
              <Instagram url={instagram} size={32} />
              <Linkedin url={instagram} size={32} />
              <Button variant="outlined" size="small" color="primary" className={classes.button}>
                Seguir
              </Button>
            </div>
          </div>
        </div>

        <div className={classes.contentWrapper}>
          <AppBar position="static" color="default" className={classes.tabBar}>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              value={this.state.selectedTab}
              onChange={this.handleChangeTab}
            >
              <Tab label="Principal" />
              <Tab label="Eventos" />
              <Tab label="Fotos" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis="x"
            index={this.state.selectedTab}
            onChangeIndex={this.handleChangeTabIndex}
          >
            <Main content={pageInfo} />
            <div>Even</div>
            <div>Fot</div>
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

Place.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withIndexStyle(Place);
