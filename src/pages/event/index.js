import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { Avatar, Button, Grid, List, ListItem, Typography } from '@material-ui/core/';

import Banner from '../../components/banner';
import Wrapper from '../../components/map';

import { eventInfo } from './event-info';
import { withIndexStyle } from './styles';


class Event extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { classes } = this.props;
    const { title, subtitle, description, flyer, categories, place, location, start, end } = eventInfo;
    const bannerContent = { title, subtitle, flyer, start, end, location, place };

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Banner content={bannerContent} />
        </div>

        <div className={classes.contentWrapper}> 
          <Grid container spacing={24}>
            <Grid item md={8} xs={12}>
              SNAP
            </Grid>
            <Grid item md={4} xs={12}>
              RADIO
            </Grid>
            <Grid item md={8} xs={12}>
              CHAT
            </Grid>
            <Grid item md={4} xs={12}>
              <List dense>
                <ListItem className={classes.listItem}>
                  <Avatar src={place && place.avatar} className={classes.avatar}/>
                  <Typography variant="subheading" color="primary" className={classes.title}>
                    {place && place.name}
                    <Button 
                      className={classes.button}
                      variant="outlined" 
                      size="small"
                      color="primary"
                    >
                      Seguir
                    </Button>
                  </Typography>
                </ListItem>
      
                {place && (
                  <div>
                    <ListItem className={classes.listItem}>
                      <Typography variant="body1" className={classes.listItemText}>
                        Capacidade: {place.capacity} pessoas
                      </Typography>
                    </ListItem>
                  </div>
                )}
                
                <ListItem className={classes.listItem}>
                  <Typography variant="body1" className={classes.listItemText}>{(place && place.location.adress) || location.address}</Typography>
                </ListItem>
              </List>
              <div className={classes.map}>
                <Wrapper mini center={location.coordinates} centerMarker />
              </div>
            </Grid>
          </Grid>  
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withIndexStyle(Event);
