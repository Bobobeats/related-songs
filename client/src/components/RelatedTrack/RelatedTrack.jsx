import React from 'react';
import PropTypes from 'prop-types';
import ArtistProfile from './ArtistProfile';
import RelatedTrackInfo from './RelatedTrackInfo';
import LikesAndMore from './LikesAndMore';
import AlbumArtContainer from './AlbumArtContainer';
import {
  TrackContainer,
  TitleContainer,
  TrackTitle,
  TextContainer,
} from '../styles';

class RelatedTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoveringArtist: false,
      isHoveringTrack: false,
    };
    this.onHoverArtistTrue = this.onHoverArtistTrue.bind(this);
    this.onHoverArtistFalse = this.onHoverArtistFalse.bind(this);
    this.onHoverTrack = this.onHoverTrack.bind(this);
  }

  onHoverArtistTrue() {
    setTimeout(() => {
      this.setState({
        isHoveringArtist: true,
      });
    }, 200);
  }

  onHoverArtistFalse() {
    setTimeout(() => {
      this.setState({
        isHoveringArtist: false,
      });
    }, 200);
  }

  onHoverTrack() {
    const { isHoveringTrack } = this.state;
    this.setState({
      isHoveringTrack: !isHoveringTrack,
    });
  }

  render() {
    const { track } = this.props;
    const { isHoveringArtist, isHoveringTrack } = this.state;
    const hoverBoxProp = {
      position: 'absolute',
      zIndex: '3',
      minHeight: '230px',
      opacity: '0.1px',
      width: '160px',
    };

    const artistProp = {
      float: 'left',
      'max-width': '100%',
      display: 'inline',
    };

    return (
      <TrackContainer onMouseEnter={this.onHoverTrack} onMouseLeave={this.onHoverTrack}>
        <AlbumArtContainer isHovering={isHoveringTrack} albumArt={track.albumArt} />
        <LikesAndMore isHovering={isHoveringTrack} />
        <TextContainer>
          <TitleContainer>
            <span onMouseEnter={this.onHoverArtistTrue} style={{ artistProp }}>
              {track.artist}
              { isHoveringArtist && (
                <div className="HoverBox" onMouseLeave={this.onHoverArtistFalse} style={hoverBoxProp}>
                  <ArtistProfile track={track} />
                </div>
              )}
            </span>
            <TrackTitle>{track.title}</TrackTitle>
          </TitleContainer>
          <RelatedTrackInfo
            plays={track.plays}
            likes={track.likes}
            reposts={track.reposts}
            comments={track.comments}
          />
        </TextContainer>
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
