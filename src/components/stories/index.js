import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { Button, Grid, Icon } from '@material-ui/core/';

import { withIndexStyle } from './styles';
//4937148517.79f7cad.767da1e28e3c4c17b4ec8cb370f3279b

class Stories extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { isFullScreen: false };
  }

  changeScreen() {
    this.setState({ isFullScreen: !this.state.isFullScreen });
  }

  render() {
    const { classes, content } = this.props;
    const { isFullScreen } = this.state;
    console.log(content);

    return(
      <div className={classes.root}>
        <Button onClick={this.changeScreen} variant="fab" aria-label="Tela Inteira" className={classes.button}>
          <Icon className={classes.icon}>{isFullScreen ? 'fullscreen_exit' : 'fullscreen'}</Icon>
        </Button>
      </div>
    );
  }
}

Event.propTypes = {
  classes: PropTypes.object,
  content: PropTypes.arrayOf(PropTypes.object),
};

export default withIndexStyle(Stories);
