import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import TopBar from './components/top-bar';
import Place from './pages/place';
import { theme } from './mui/theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <TopBar />
          <Place />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
