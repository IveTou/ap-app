import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import SwipeableViews from 'react-swipeable-views';

import { Avatar, AppBar, Button, Tab, Tabs, Typography } from '@material-ui/core/';
import Rating from '../../components/rating';
import { Facebook, Instagram, Linkedin } from '../../components/social-icons';

import Main from './main';
import Gallery from './gallery';
import { pageInfo } from './page-info';
import { withIndexStyle } from './styles';


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
    const { avatar, name, followedBy, facebook, instagram } = pageInfo;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Avatar alt={name} src={avatar} className={classes.avatar} />
          <div className={classes.headerInfo}>
            <Typography className={classes.title}>{name}</Typography>
            <div className={classes.stats}>
              <Rating />
              <Typography
                align="center"
                variant="body1"
                color="primary"
                className={classes.followers}
              >
                {`${followedBy.length} seguidores`}
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
            <div>Event</div>
            <Gallery content={pageInfo} />
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
