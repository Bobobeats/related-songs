import styled from 'styled-components';
import { Users } from 'styled-icons/icomoon/Users';
// import { Users } from 'styled-icons/fa-solid/UserFriends';
// import { UserPlus } from 'styled-icons/icomoon/UserPlus';
// import { FollowingIcon } from 'styled-icons/icomoon/UserCheck';
import { HeartFullOutline } from 'styled-icons/typicons/HeartFullOutline';
import { CommentAlt } from 'styled-icons/fa-solid/CommentAlt';
import { Play } from 'styled-icons/boxicons-regular/Play';
import { Repost } from 'styled-icons/boxicons-regular/Repost';

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
  font-family: InterstateSound Tnum,Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
`;

export const AlbumArt = styled.img`
  padding: 5px 6px;
  text-align: center;
  position: relative
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #999;
`;

export const TrackTitle = styled.div`
  float: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HoverBox = styled.div`
  z-index: 4;
  opacity: 0;
  margin-top: -15px;
`;

export const RelatedTrackLi = styled.li`
  list-style-type: none;
  padding: 5px 10px;
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

export const Plays = styled(Play)`
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
