import React from 'react';
import styled from 'styled-components';
// import { Users } from 'styled-icons/fa-solid/UserFriends';
import { Followers } from 'styled-icons/icomoon/Users';
import { Follow } from 'styled-icons/icomoon/UserPlus';
import PropTypes from 'prop-types';
// import { FollowingIcon } from 'styled-icons/icomoon/UserCheck';

const StyledContainer = styled.div`
  font-family: InterstateSound Tnum,Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
`;

const ArtistName = styled.div`
  color: #333;
`;

const AvatarUrl = styled.img`
  border-radius: 50%;
`;

const FollowersIcon = styled(Followers)`
  justify-content: center;
  color: #999999;
`;

const FollowerCount = styled.div`
  color: #999999;
`;

const Location = styled.div`
  justify-content: center;
`;

const FollowButton = styled.button`
  color: ${(props) => (props.following ? '#333333' : '#FF5500')};
  border: 1px;
  border-color: ${(props) => (props.following ? '#333333' : '#FF5500')}
  border-radius: 3px;
  background-color: #fffff;
  text-align: center;
`;

// const Following = styled(FollowingIcon)`
// `;

const FollowIcon = styled(Follow)`
`;

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
    const { following, followingStatus } = this.state;
    return (
      <StyledContainer>
        <AvatarUrl src={track.avatarUrl} />
        <ArtistName />
        <div>
          <FollowersIcon />
          <FollowerCount>{track.formatted.followers}</FollowerCount>
        </div>
        {track.location && <Location>{track.location }</Location>}
        <FollowButton className="followbutton" following={{ following }} onClick={this.onFollow.bind}>
          <FollowIcon />
          <p>{{ followingStatus }}</p>
        </FollowButton>
      </StyledContainer>
    );
  }
}

ArtistProfile.propTypes = {
  track: PropTypes.instanceOf(Object),
  formatted: PropTypes.instanceOf(Object),
  
}

export default ArtistProfile;
