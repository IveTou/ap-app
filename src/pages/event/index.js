import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { map } from 'lodash';
import moment from 'moment';
import 'moment/locale/pt-br';
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

import Billboard from '../../components/billboard';
import Stories from '../../components/stories';
import Wrapper from '../../components/map';

import { eventInfo } from './event-info';
import { withIndexStyle } from './styles';

import config from '../../config';

const tag = 'toakee';

class Event extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { isLoading: true, story: [] };
  }

  componentDidMount() {
    fetch(config.INSTAGRAM_API + `${tag}/media/recent?` + config.ACCESS_TOKEN)
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
    .then(_ => this.setState({ isLoading: false, stories: _.data }))
    .catch(err => console.log(err));
  }

  render() {
    const { isLoading, stories } = this.state;
    const { classes } = this.props;
    const { title, subtitle, description, flyer, categories, place, location, start, end, prices } = eventInfo;
    const bannerContent = { title, subtitle, flyer, start, end, location, place };
    const now = moment();
    const isNow = start <= now && end >= now;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          {(!isNow || isLoading) &&
            <Billboard content={bannerContent} isLoading={isLoading} />
          }
          {!isLoading && isNow && <Stories content={stories}/>}
        </div>

        <Grid container spacing={24} className={classes.content}>
          <Grid item md={8} xs={12}>
            <div className={classes.description}>
              <Typography variant="title" className={classes.title}>Sobre</Typography>
              <Typography variant="subheading" dangerouslySetInnerHTML={{ __html: description }}/>
            </div>
            <div className={classes.categories}>
              {map(categories, categorie => 
                <Chip key={categorie} label={categorie} className={classes.chip}/>
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
    );
  }
}

Event.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withIndexStyle(Event);
