import React from 'react';
import styled from 'styled-components';
// import { Users } from 'styled-icons/fa-solid/UserFriends';
import { Users } from 'styled-icons/icomoon/Users';
import { UserPlus } from 'styled-icons/icomoon/UserPlus';
import PropTypes from 'prop-types';
// import { FollowingIcon } from 'styled-icons/icomoon/UserCheck';

const StyledContainer = styled.div`
  font-family: InterstateSound Tnum,Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  position: absolute;
  text-align: center;
  width: 70px;
  height: 75px;
  z-index: 3;
  background-color: #ffffff;
`;

const ArtistName = styled.div`
  color: #333;
`;

const AvatarUrl = styled.img`
  border-radius: 50%;
`;

const FollowersIcon = styled(Users)`
  justify-content: center;
  color: #999999;
  size: 10px;
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
  background-color: #ffffff;
  text-align: center;
`;

// const Following = styled(FollowingIcon)`
// `;

const FollowIcon = styled(Users)`
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
