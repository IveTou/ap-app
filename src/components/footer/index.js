import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { Grid, List, ListItem, Typography } from '@material-ui/core/';
import { deepOrange } from '@material-ui/core/colors';

import { Facebook, Instagram, Linkedin } from '../social-icons';
import { withIndexStyle } from './styles';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.root}>
        <Grid container spacing={24} className={classes.container}>
          <Grid item sm={12} md={3} className={classes.column}>
            <Typography
              className={classes.title}
              align="center"
              variant="subheading"
              color="inherit"
            >
              Fale conosco
            </Typography>
            <List dense>
              <ListItem className={classes.listItem}>
                <Typography>contato@toakee.com</Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography>+55 71 996 763 313</Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography>Salvador-Ba</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={12} md={3} className={classes.column}>
            <Typography
              className={classes.title}
              align="center"
              variant="subheading"
              color="inherit"
            >
              Serviços
            </Typography>
            <List dense>
              <ListItem className={classes.listItem}>
                <Typography color="primary">Seja um parceiro</Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography color="primary">Crie seu evento</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={12} md={3} className={classes.column}>
            <Typography
              className={classes.title}
              align="center"
              variant="subheading"
              color="inherit"
            >
              Sobre nós
            </Typography>
            <List dense>
              <ListItem className={classes.listItem}>
               <Typography color="primary">Quem somos?</Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography color="primary">Termos de Uso</Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography color="primary">Políticas de Privacidade</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={12} md={3} className={classes.column}>
            <Typography className={classes.title} align="center" variant="subheading" color="inherit">
              Estamos aqui!
            </Typography>
            <div className={classes.iconRow}>
              <Facebook url="https://www.facebook.com/eu.toakee" color={deepOrange[500]} />
              <Instagram url="https://www.instagram.com/eu.toakee" color={deepOrange[500]} />
              <Linkedin url="https://linkedin.com/company/toakee" color={deepOrange[500]} />

            </div>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 24 }}>
            <Typography align="center" variant="subheading" color="inherit">
              Copyright &copy; 2017 Toakee. Todos os direitos reservados.
            </Typography>
          </Grid>
        </Grid>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object,
};

export default withIndexStyle(Footer);
