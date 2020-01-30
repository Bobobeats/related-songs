import React from 'react';
import {
  TrackHover,
  PauseButton,
  PlayButton,
  MoreButton,
  LikeButton,
} from './styles';

class PlayLikesMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playClicked: false,
      moreClicked: false,
      likeClicked: false,
    };
    this.onLikeClick = this.onLikeClick.bind(this);
    this.onMoreClick = this.onMoreClick.bind(this);
    this.onPlayClick = this.onPlayClick.bind(this);
  }

  onPlayClick() {
    const { playClicked } = this.state;
    this.setState({
      playClicked: !playClicked,
    });
  }

  onMoreClick() {
    const { moreClicked } = this.state;
    this.setState({
      playClicked: !moreClicked,
    });
  }

  onLikeClick() {
    const { moreClicked } = this.state;
    this.setState({
      playClicked: !moreClicked,
    });
  }

  render() {
    const { playClicked, moreClicked, likeClicked } = this.state;
    return (
      <TrackHover>
        <div>
          {playClicked && <PauseButton />}
          {!playClicked && <PlayButton />}
        </div>
        <LikeButton className="likebutton" toggled={likeClicked} onClick={this.onLikeClick} />
        <MoreButton className="morebutton" toggled={moreClicked} onClick={this.onLikeClick} />
      </TrackHover>
    );
  }
}

export default PlayLikesMore;
