import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { Button, Paper, TextField, Typography } from '@material-ui/core/';
import { withIndexStyle } from './styles';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { login: true, email: '', password: '', name: '' };
  }

  handleAuth() {
    console.log("Authentication");
  }

  render() {
    const { classes } = this.props;
    const { login, email, password, name } = this.state;

    return (
      <Paper className={classes.root}>
        <div className={classes.header}>
          <Typography variant="headline" gutterBottom>{login ? 'Entrar' : 'Cadastro'}</Typography>
        </div>
        <form className={classes.rootForm} noValidate autoComplete="off">
          {!login &&
            <TextField
              label="Nome"
              className={classes.textField}
              onChange={e => this.setState({ name: e.target.value })}
              margin="normal"
            />
          }
          <TextField
            label="Email"
            className={classes.textField}
            onChange={e => this.setState({ email: e.target.value })}
            margin="normal"
          />
          <TextField
            label="Introduza a palavra-passe"
            className={classes.textField}
            onChange={e => this.setState({ password: e.target.value })}
            margin="normal"
          />
        </form>
        <div className={classes.footer}>
          <div className={classes.footerButtons}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => this.handleAuth()}
            >
              {login ? 'entrar' : 'cadastrar'}
            </Button>
            <Button
              color="primary"
              size="small"
              className={classes.button}
              onClick={()=> this.setState({ login: !login })}
            >
              {login ? 'Criar conta' : 'Já sou cadastrado'}
            </Button>
          </div>
        </div>
      </Paper>
    );
  }
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withIndexStyle(Auth);
