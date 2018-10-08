import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { map } from 'lodash';
import { 
  Avatar, 
  Button, 
  Chip,
  Grid, 
  GridList, 
  GridListTile, 
  List, 
  ListItem, 
  ListItemText, 
  Typography
} from '@material-ui/core/';

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
    const { title, subtitle, description, flyer, categories, place, location, start, end, prices } = eventInfo;
    const bannerContent = { title, subtitle, flyer, start, end, location, place };

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Banner content={bannerContent} />
        </div>

        <div> 
          <Grid container spacing={24}>
            <Grid item md={8} xs={12}>
              <div className={classes.description}>
                <Typography variant="title" className={classes.title}>Sobre</Typography>
                <Typography variant="subheading" dangerouslySetInnerHTML={{ __html: description }}/>
              </div>
              <div className={classes.categories}>
                {map(categories, categorie => 
                  <Chip label={categorie} className={classes.chip}/>
                )}
              </div>
            </Grid>
            
            <Grid item md={4} xs={12}>
              <div className={classes.prices}>
                <Typography variant="title" className={classes.title}>Entradas</Typography>
                <GridList cellHeight="auto">
                  {map(prices, priceItem => 
                    <GridListTile
                      key={`${priceItem.description}${priceItem.value}`}
                    >
                      <ListItemText
                        style={{ paddingLeft: 16 }}
                        primary={priceItem.description}
                        secondary={`R$ ${priceItem.value}`}
                      />
                    </GridListTile>
                  )}
                </GridList>
              </div>

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
            <Grid item md={8} xs={12}>
            </Grid>
            <Grid item md={4} xs={12}>
              
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
