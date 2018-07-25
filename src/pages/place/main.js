import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid, Icon, List, ListItem, ListItemText, Typography } from '@material-ui/core/';

import Banner from '../../components/banner';
import Wrapper from '../../components/map';
import { withMainStyle } from './styles';

const Main = ({ classes, content = {} }) => {
  const {
    avatar,
    name,
    description,
    location,
    openAt,
    categories,
    comments,
  } = content;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item md={8} xs={12}>
          <Banner />
        </Grid>
        <Grid item md={4} xs={12}>
          <List dense>
            <ListItem className={classes.listItem}>
              <Avatar src={avatar} className={classes.avatar}/>
              <Typography variant="subheading" color="primary" className={classes.title}>
                {name}
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography variant="body1" className={classes.listItemText}>{location.address}</Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography variant="body1" className={classes.listItemText}>{openAt}</Typography>
            </ListItem>
          </List>
          <div className={classes.map}>
            <Wrapper mini center={location.coordinates} centerMarker />
          </div>
        </Grid>
        <Grid item md={8} xs={12}>
          <div>
            <Typography variant="subheading" color="primary">
              Descrição
            </Typography>
            <Typography align="inherit" component="div">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </Typography>
          </div>
          <div>
            <Typography variant="subheading" color="primary">
             Comentários
            </Typography>
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography variant="subheading" color="primary">
           #TAGS
          </Typography>
          <Typography align="inherit" component="div">
            {categories}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.object,
};

export default withMainStyle(Main);
