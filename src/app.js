import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import TopBar from './components/top-bar';
import Place from './pages/place';
import Login from './pages/login';
import Footer from './components/footer';
import { theme } from './mui/theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/p" component={Place} />
          </Switch>
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;
