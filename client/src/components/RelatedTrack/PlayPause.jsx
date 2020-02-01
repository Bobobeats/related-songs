import React from 'react';
import PropTypes from 'prop-types';
import {
  PlayButtonContainer,
  PlayButton,
  PauseButton,
} from '../styles';

class PlayPause extends React.Component {
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
    const { isHovering } = this.props;
    const { isPlaying } = this.state;
    return (
      <PlayButtonContainer visible={isHovering}>
        {isPlaying && <PauseButton size="28px" onClick={this.clickPlay} />}
        {!isPlaying && <PlayButton size="28px" onClick={this.clickPlay} />}
      </PlayButtonContainer>
    );
  }
}

PlayPause.propTypes = {
  isHovering: PropTypes.bool,
};

PlayPause.defaultProps = {
  isHovering: false,
};

export default PlayPause;
