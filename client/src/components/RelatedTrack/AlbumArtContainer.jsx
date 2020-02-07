import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';
import PlayPause from './PlayPause';
import {
  AlbumArt,
  AlbumContainer,
} from '../styles';

const AlbumArtContainer = (props) => {
  const { albumArt, isHovering } = props;
  const alt = faker.random.words(1);
  return (
    <AlbumContainer>
      <AlbumArt src={albumArt} alt={alt} />
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
