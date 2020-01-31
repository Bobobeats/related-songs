import React from 'react';
import PropTypes from 'prop-types';
import {
  TrackHover,
  LikeButtonContainer,
  MoreButtonContainer,
  MoreButton,
  LikeButton,
} from './styles';

class LikesAndMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreClicked: false,
      likeClicked: false,
    };
    this.onLikeClick = this.onLikeClick.bind(this);
    this.onMoreClick = this.onMoreClick.bind(this);
  }

  onMoreClick() {
    const { moreClicked } = this.state;
    this.setState({
      moreClicked: !moreClicked,
    });
  }

  onLikeClick() {
    const { likeClicked } = this.state;
    this.setState({
      likeClicked: !likeClicked,
    });
  }

  render() {
    const { moreClicked, likeClicked } = this.state;
    const { isHovering } = this.props;
    return (
      <TrackHover visible={isHovering}>
        <LikeButtonContainer toggled={likeClicked}>
          <LikeButton size="16px" className="likebutton" toggled={likeClicked} onClick={this.onLikeClick} />
        </LikeButtonContainer>
        <MoreButtonContainer toggled={moreClicked}>
          <MoreButton size="16px" className="morebutton" toggled={moreClicked} onClick={this.onMoreClick} />
        </MoreButtonContainer>
      </TrackHover>
    );
  }
}

PlayLikesMore.propTypes = {
  isHovering: PropTypes.bool,
};

PlayLikesMore.defaultProps = {
  isHovering: false,
};

export default LikesAndMore;
