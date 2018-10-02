import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid, List, ListItem, Typography } from '@material-ui/core/';
import { TagCloud } from "react-tagcloud";

import Banner from '../../components/banner';
import Wrapper from '../../components/map';
import Comment from '../../components/comment';
import { withMainStyle } from './styles';

import { categoryCloud } from './page-info';

const Main = ({ classes, showComments, content = {} }) => {
  const {
    avatar,
    name,
    capacity,
    description,
    location,
    openAt,
    categories,
    comments = [],
  } = content;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item md={8} xs={12}>
          <Banner mini />
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
              <Typography variant="body1" className={classes.listItemText}>Capacidade: {capacity} pessoas</Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography variant="body1" className={classes.listItemText}>{openAt}</Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography variant="body1" className={classes.listItemText}>{location.address}</Typography>
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
          {showComments && comments.length && (
            <div className={classes.comments}>
              <Typography variant="subheading" color="primary">
                Comentários
              </Typography>
              <List>
                {comments.map(({ owner, comment, time }, index )=> (
                  <Comment owner={owner} comment={comment} time={time} key={index} />
                ))}
              </List>
            </div>
          )}
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography variant="subheading" color="primary">
           #TAGS
          </Typography>
          <TagCloud
            className={classes.tagCloud}
            minSize={12}
            maxSize={35}
            colorOptions={{
              luminosity: 'dark',
              hue: 'orange',
            }}
            tags={categoryCloud}
            onClick={tag => console.log('clicking on tag:', tag)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.object,
  showComments: PropTypes.bool,
};

export default withMainStyle(Main);
