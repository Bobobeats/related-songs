import React from 'react';
import PropTypes from 'prop-types';
import {
  AlbumArt,
  AlbumContainer,
  PlayButtonContainer,
  PlayButton,
  PauseButton,
} from './styles';

class AlbumArtContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
    this.clickPlay = this.clickPlay.bind(this);
  }

  clickPlay() {
    const { isPlaying } = this.state;
    this.setState({
      isPlaying: !isPlaying,
    });
  }

  render() {
    const { albumArt, isHovering } = this.props;
    const { isPlaying } = this.state;
    return (
      <AlbumContainer>
        <AlbumArt src={albumArt} />
        <PlayButtonContainer visible={isHovering}>
          {isPlaying && <PauseButton size="28px" onClick={this.clickPlay} />}
          {!isPlaying && <PlayButton size="28px" onClick={this.clickPlay} />}
        </PlayButtonContainer>
      </AlbumContainer>
    );
  }
}

AlbumArtContainer.propTypes = {
  isHovering: PropTypes.bool,
  albumArt: PropTypes.string,
};

AlbumArtContainer.defaultProps = {
  isHovering: false,
  albumArt: '',
};

export default AlbumArtContainer;
