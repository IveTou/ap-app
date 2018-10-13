import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import Instafeed from 'instafeed.js';

import { withIndexStyle } from './styles';
//4937148517.79f7cad.767da1e28e3c4c17b4ec8cb370f3279b
class Stories extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentWillMount(){
    const feed = new Instafeed({
      get: 'tagged',
      tagName: 'toakee',
      accessToken: '4937148517.79f7cad.767da1e28e3c4c17b4ec8cb370f3279b',
    });
    feed.run();
  }

  render() {    
    return(
      <div id="instafeed"></div>
    );
  }
}

Stories.propTypes = {
  classes: PropTypes.object,
};

export default withIndexStyle(Stories);
