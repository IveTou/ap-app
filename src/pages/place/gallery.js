import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';
import autoBind from 'react-autobind';

import { GridList, GridListTile } from '@material-ui/core/';
import { map } from 'lodash';

import { withGalleryStyle } from './styles';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };
    autoBind(this);
  }

  handleClickPrev() {
    this.openPhoto(this.state.currentImage - 1);
  }

  handleClickNext() {
    this.openPhoto(this.state.currentImage + 1);
  }

  openPhoto(idx) {
    this.setState({ lightboxIsOpen: true, currentImage: idx });
  }

  closeLightBox() {
    this.setState({ lightboxIsOpen: false });
  }

  render() {
    const { classes, content = {} } = this.props;
    const { photos } = content;

    return (
      <div className={classes.root}>
        {photos.length &&
          <Lightbox
            images={photos.map(({ url }) => ({ src: url }))}
            isOpen={this.state.lightboxIsOpen}
            onClickPrev={this.handleClickPrev}
            onClickNext={this.handleClickNext}
            onClose={this.closeLightBox}
            currentImage={this.state.currentImage}
          />
        }
        <GridList className={classes.grid} spacing={24} cols={4}>
          {photos.map((tile, index) => (
            <GridListTile className={classes.tile} key={index} style={{ width: 'auto' }}>
              <img
                alt={tile.description}
                src={tile.thumb}
                onClick={() => this.openPhoto(index)}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

Gallery.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.object,
};

export default withGalleryStyle(Gallery);
