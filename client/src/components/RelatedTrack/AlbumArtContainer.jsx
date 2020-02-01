import React from 'react';
import PropTypes from 'prop-types';
import PlayPause from './PlayPause';
import {
  AlbumArt,
  AlbumContainer,
} from '../styles';

const AlbumArtContainer = (props) => {
  const { albumArt, isHovering } = props;
  return (
    <AlbumContainer>
      <AlbumArt src={albumArt} />
      <PlayPause isHovering={isHovering} />
    </AlbumContainer>
  );
};

AlbumArtContainer.propTypes = {
  isHovering: PropTypes.bool,
  albumArt: PropTypes.string,
};

AlbumArtContainer.defaultProps = {
  isHovering: false,
  albumArt: '',
};

export default AlbumArtContainer;
