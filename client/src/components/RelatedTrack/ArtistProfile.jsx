import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContainer,
  ArtistName,
  AvatarUrl,
  FollowerCount,
  Location,
  FollowButton,
} from './styles';

class ArtistProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: false,
      followingStatus: 'Following' || 'Follow',
    };
    this.onFollow = this.onFollow.bind(this);
  }

  onFollow() {
    const { following, followingStatus } = this.state;
    this.setState({
      following: !{ following },
      followingStatus: !{ followingStatus },
    });
  }

  render() {
    const { track } = this.props;
    const { following } = this.state;
    const { followingStatus } = this.state;
    return (
      <StyledContainer>
        <AvatarUrl src={track.avatarUrl} />
        <ArtistName />
        <div>
          <FollowerCount>{track.followers}</FollowerCount>
        </div>
        {track.location && <Location>{ track.location }</Location>}
        <FollowButton className="followbutton" following={{ following }} onClick={this.onFollow}>
          <span>{followingStatus}</span>
        </FollowButton>
      </StyledContainer>
    );
  }
}

ArtistProfile.propTypes = {
  track: PropTypes.instanceOf(Object),
};

ArtistProfile.defaultProps = {
  track: {},
};

export default ArtistProfile;
