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
    this.onHoverTrue = this.onHoverTrue.bind(this);
    this.onHoverFalse = this.onHoverFalse.bind(this);
  }

  onHoverTrue() {
    setTimeout(() => {
      this.setState({
        isHovering: true,
      });
    }, 200);
  }

  onHoverFalse() {
    setTimeout(() => {
      this.setState({
        isHovering: false,
      });
    }, 200);
  }

  render() {
    const { track } = this.props;
    const { isHovering } = this.state;
    const hoverBoxProp = {
      position: 'absolute',
      zIndex: '3',
      minHeight: '230px',
      opacity: '0.1px',
      width: '160px',
    };
    return (
      <TrackContainer>
        <div style={{ float: 'left' }}>
          <AlbumArt src={track.albumArt} />
        </div>
        <TextContainer>
          <TitleContainer>
            <span onMouseEnter={this.onHoverTrue} style={{ float: 'left' }}>
              {track.artist}
              { isHovering && (
                <div className="HoverBox" onMouseLeave={this.onHoverFalse} style={hoverBoxProp}>
                  <ArtistProfile track={track} />
                </div>
              )}
            </span>
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
