import React from 'react';
import PropTypes from 'prop-types';
import ArtistProfile from './ArtistProfile';
import RelatedTrackInfo from './RelatedTrackInfo';
import {
  TrackContainer,
  AlbumArt,
  TitleContainer,
  TrackTitle,
  TextContainer,
} from './styles';

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
        <TextContainer>
          <TitleContainer>
            <div onMouseEnter={this.onHover} onMouseLeave={this.onHover} style={{ float: 'left' }}>
              {track.artist}
              { isHovering && <ArtistProfile track={track} /> }
            </div>
            <div style={{ width: '100%' }} />
            <TrackTitle>{track.title}</TrackTitle>
          </TitleContainer>
          <RelatedTrackInfo
            plays={track.plays}
            likes={track.likes}
            reposts={track.reposts}
            comments={track.comments}
          />
        </TextContainer>
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
