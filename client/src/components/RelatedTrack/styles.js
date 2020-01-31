import styled from 'styled-components';
import { Users } from 'styled-icons/icomoon/Users';
// import { Users } from 'styled-icons/fa-solid/UserFriends';
// import { UserPlus } from 'styled-icons/icomoon/UserPlus';
// import { FollowingIcon } from 'styled-icons/icomoon/UserCheck';
import { HeartFullOutline } from 'styled-icons/typicons/HeartFullOutline';
import { CommentAlt } from 'styled-icons/fa-solid/CommentAlt';
import { Play3 } from 'styled-icons/icomoon/Play3';
import { Repost } from 'styled-icons/boxicons-regular/Repost';
import { MoreHoriz } from 'styled-icons/material/MoreHoriz';
import { PauseCircleFilled } from 'styled-icons/material/PauseCircleFilled';
import { PlayCircleFilled } from 'styled-icons/material/PlayCircleFilled';
import { Equalizer } from 'styled-icons/boxicons-regular/Equalizer';

export const ArtistProfileContainer = styled.div`
  font-family: InterstateSound Tnum,Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  position: absolute;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 139px;
  min-height: 199px;
  z-index: 3;
  margin-top: 10px;
  padding: 10px;
  box-shadow: 2px 2px 4px #999;
  background-color: #ffffff;
  flex-direction: column;
`;

export const ArtistName = styled.div`
  margin: 0px 0px 7px 0px;
  color: #333;
`;

export const AvatarUrl = styled.img`
  border-radius: 50%;
  width: 80px;
  margin: 0px 0px 10px 0px;
  height: 80px;
`;

export const FollowersIcon = styled(Users)`
  justify-content: center;
  color: #999999;
`;

export const FollowerCount = styled.span`
  color: #999999;
  font-size: 11px;
`;

export const Location = styled.div`
  margin: 0px 0px 7px 0px;
  justify-content: center;
`;

export const FollowButton = styled.button`
  color: ${(props) => (props.following ? '#FF5500' : '#333333')};
  border: 1px solid;
  border-radius: 5px;
  font-size: 11px;
  border-color: ${(props) => (props.following ? '#FF5500' : '#333333')}
`;

// const Following = styled(FollowingIcon)`
// `;

export const FollowIcon = styled(Users)`
`;

export const TrackContainer = styled.div`
  display: flex;
  position: relative;
  font-family: InterstateSound Tnum,Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
`;

export const AlbumContainer = styled.div`
  margin-right: 4px;
  float: left;
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  padding: 5px 6px 5px;
`;


export const AlbumArt = styled.img`
  border: 1px solid #999;
`;

export const TitleContainer = styled.div`
  display: inline-block;
  max-width: 100%;
  flex-direction: column;
  font-size: 12px;
  color: #999;
`;

export const TrackTitle = styled.div`
  float: left;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
  width: 100%;
  color: #333;
  font-size: 14px;
  font-weight: 100;
`;

export const TrackInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #999;
  font-size: 11px;
`;

export const TextContainer = styled.div`
  display: block;
  margin-top: 4px;
  flex-direction: column;
  justify-content: center;
`;

export const HoverBox = styled.div`
  z-index: 4;
  opacity: 0;
  margin-top: -15px;
`;

export const RelatedTrackUl = styled.ul`
  padding: 0px;
  margin: 0px 0px 16px 0px;
`;

export const RelatedTrackLi = styled.li`
  list-style-type: none;
  padding: 5px 0px;
`;

export const Likes = styled(HeartFullOutline)`
  display: inline;
  width: 16px;
  height: 12px;
`;

export const Comments = styled(CommentAlt)`
  display: inline;
  width: 16px;
  height: 12px;
`;

export const Plays = styled(Play3)`
  display: inline;
  width: 16px;
  height: 12px;
`;

export const Reposts = styled(Repost)`
  display: inline;
  width: 16px;
  height: 12px;
`;

export const TrackStatistic = styled.div`
  display: inline-flex;
  margin: 5px 9px 5px 0px;
`;

export const TrackStatNum = styled.span`
  justify-cotent: center;
`;

export const LikeButton = styled(HeartFullOutline)`
  color: ${(props) => (props.toggled ? '#FF5500' : '#000000')};
  cursor: pointer;
  text-align: center;
`;

LikeButton.displayName = 'LikeButton';

export const LikeButtonContainer = styled.button`
  border: 1px solid;
  padding: 2px 4px 2px 4px;
  justify-content: center;
  background-color: #ffffff;
  border-color: ${(props) => (props.toggled ? '#FF5500' : '#e5e5e5')};
  border-radius: 3px;
  cursor: pointer;
  margin: 0px 5px 0px 0px;
  text-align: center;
`;

export const MoreButton = styled(MoreHoriz)`
  color: ${(props) => (props.toggled ? '#FF5500' : '#000000')};
  cursor: pointer;
  text-align: center;
`;

MoreButton.displayName = 'MoreButton';

export const MoreButtonContainer = styled.button`
  min-width: 25px;
  background-color: #ffffff;
  padding: 2px 4px 2px 4px;
  border: 1px solid;
  border-color: ${(props) => (props.toggled ? '#FF5500' : '#e5e5e5')};
  border-radius: 3px;
  justify-content: center;
  cursor: pointer;
  text-align: center;
`;

export const PlayButtonContainer = styled.div`
  position: absolute;
  background-size: 3px;
  background-color: #ffffff;
  border-radius: 300px;
  display: inline;
  z-index: 10;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

export const PauseButton = styled(PauseCircleFilled)`
  cursor: pointer;
  fill: #FF5500;
`;

PauseButton.displayName = 'PauseButton';

export const PlayButton = styled(PlayCircleFilled)`
  cursor: pointer;
  fill: #FF5500;
`;

PlayButton.displayName = 'PlayButton';

export const TrackHover = styled.div`
  position: absolute;
  align-self: center;
  right: 5px;
  z-index: 6;
  display: inline;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

export const HeaderContainer = styled.div`
  font-family: InterstateSound Tnum,Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  display: flex;
  line-height: 24px;
  flex-direction: row;
  font-size: 12px;
  font-weight: 100;
  color: #999;
  border-bottom: 1px solid #f2f2f2;
  justify-content: space-between;
`;

export const Header = styled.h3`
  margin: 0px;
  font-size: 12px;
  display: flex
  align-items: center;
  font-weight: 100;
  flex-direction: row;
`;

export const EqualizerIcon = styled(Equalizer)`
  display: inline-block;
  vertical-align: top;
  margin-right: 4px;
`;
