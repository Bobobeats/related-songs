import React from 'react';
import PropTypes from 'prop-types';
import numberFormatter from './NumberFormatter';
import {
  ArtistProfileContainer,
  ArtistName,
  AvatarUrl,
  FollowerCount,
  Location,
  FollowButton,
  FollowersIcon,
} from '../styles';

class ArtistProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: false,
      followingStatus: 'Follow',
    };
    this.onFollow = this.onFollow.bind(this);
  }

  onFollow() {
    const { following } = this.state;
    this.setState({
      following: !following,
    }, () => this.setState((state) => ({ followingStatus: state.following ? 'Following' : 'Follow' })));
  }

  render() {
    const { track } = this.props;
    const { following } = this.state;
    const { followingStatus } = this.state;
    return (
      <ArtistProfileContainer>
        <AvatarUrl src={track.avatarUrl} />
        <ArtistName>{track.artist}</ArtistName>
        <div style={{ margin: '0px 0px 7px 0px' }}>
          <FollowersIcon size="11px" />
          { ' ' }
          <FollowerCount>{numberFormatter(track.followers)}</FollowerCount>
        </div>
        {track.location && <Location>{ track.location }</Location>}
        <FollowButton className="followbutton" following={following} onClick={this.onFollow}>
          <span>{followingStatus}</span>
        </FollowButton>
      </ArtistProfileContainer>
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
