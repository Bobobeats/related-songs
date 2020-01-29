import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArtistProfile from './ArtistProfile';

const TrackContainer = styled.div`
  display: flex;
  font-family: InterstateSound Tnum,Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
`;

const AlbumArt = styled.img`
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrackTitle = styled.div`
  float: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
`;

class RelatedTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
    this.onHover = this.onHover.bind(this);
  }

  onHover() {
    const { isHovering } = this.state;
    this.setState({
      isHovering: !isHovering,
    });
  }

  render() {
    const { track } = this.props;
    const { isHovering } = this.state;
    return (
      <TrackContainer>
        <div style={{ float: 'left' }}>
          <AlbumArt src={track.albumArt} />
        </div>
        <TitleContainer>
          <div onMouseEnter={this.onHover} onMouseLeave={this.onHover} style={{float: 'left' }}>
            {track.artist}
            { isHovering && <ArtistProfile track={track} /> }
          </div>
          <div style={{ width: '100%'}} />
          <TrackTitle>{track.title}</TrackTitle>
        </TitleContainer>
        <div style={{ width: '100%' }} />
      </TrackContainer>
    );
  }
}

RelatedTrack.propTypes = {
  track: PropTypes.instanceOf(Object),
};

RelatedTrack.defaultProps = {
  track: {},
};

export default RelatedTrack;
