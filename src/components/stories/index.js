import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import SwipeableViews from "react-swipeable-views";
import classNames from 'classnames';
import { autoPlay } from "react-swipeable-views-utils";

import { Button, Icon, MobileStepper, Modal, Paper } from '@material-ui/core/';

import { withIndexStyle } from './styles';
//4937148517.79f7cad.767da1e28e3c4c17b4ec8cb370f3279b

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Stories extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { isFullScreen: false, activeStep: 0 };
  }

  handleScreenModeChange() {
    this.setState({ isFullScreen: !this.state.isFullScreen });
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  renderStepper(content, classes, activeStep, isFullScreen){
    return(
      <AutoPlaySwipeableViews
        enableMouseEvents
        animateTransitions={false}
        axis="x"
        index={activeStep}
        onChangeIndex={this.handleStepChange}
        className={classes.swipeableViews}
      >
        {content.map((step, index) => (
          <div 
            key={step.id} 
            className={classes.views} 
            style={{ 
              backgroundImage: `url('${isFullScreen 
                ? step.images.standard_resolution.url
                : step.images.low_resolution.url}')`,
              backgroundPosition: !isFullScreen && 'center'   
            }}
          />
        ))}
      </AutoPlaySwipeableViews>
    )
  }

  render() {
    const { classes, content } = this.props;
    const { isFullScreen, activeStep } = this.state;
    const maxSteps = content.length;

    return(
      <div className={classes.root}>
        <div className={classes.storiesContainer}>
          <Button onClick={this.handleScreenModeChange} variant="fab" aria-label="Tela Inteira" className={classes.button}>
            <Icon className={classes.icon}>{isFullScreen ? 'fullscreen_exit' : 'fullscreen'}</Icon>
          </Button>
          {this.renderStepper(content, classes, activeStep)}
        </div>
        <Modal
          disableBackdropClick
          disableAutoFocus
          open={this.state.isFullScreen}
          onClose={this.handleScreenModeChange}
          aria-labelledby="stories"
          BackdropProps={{ classes: { root: classes.backdrop } }}
        >
          <Paper className={classes.paper}>
            <Button onClick={this.handleScreenModeChange} variant="fab" aria-label="Tela Inteira" className={classes.button}>
              <Icon className={classes.icon}>{isFullScreen ? 'fullscreen_exit' : 'fullscreen'}</Icon>
            </Button>
            <div className={classes.arrows}>
              <Button 
                onClick={this.handleBack} 
                variant="fab" 
                aria-label="Voltar Imagem" 
                className={classes.arrowButton}
                style={{ visibility: activeStep <= 0 && 'hidden' }}
              >
                <Icon className={classes.icon}>arrow_back_ios</Icon>
              </Button>
              <Button 
                onClick={this.handleNext}
                variant="fab"
                aria-label="Avançar Imagem"
                className={classes.arrowButton}
                style={{ visibility: activeStep >= maxSteps - 1 && 'hidden' }}
              >
                <Icon className={classes.icon}>arrow_forward_ios</Icon>
              </Button>
            </div>
            
            {this.renderStepper(content, classes, activeStep, isFullScreen)}
            
            <MobileStepper
              steps={maxSteps}
              variant="dots"
              position="static"
              activeStep={activeStep}
              className={classes.mobileStepper}
              classes={{ 
                progress: classes.progress,
                dots: classes.dots,
                dot: classes.dot, 
                dotActive: classes.dotActive,
              }}
            />  
          </Paper>
        </Modal>
      </div>
    );
  }
}

Event.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.arrayOf(PropTypes.object),
};

export default withIndexStyle(Stories);
