import React from 'react';
import PropTypes from 'prop-types';
import RelatedTrack from './RelatedTrack/RelatedTrack';
import { RelatedTrackLi } from './RelatedTrack/styles';

const RelatedTracks = (props) => {
  const { trackList } = props;
  return (
    <ul>
      {trackList.map((track) => (
        <RelatedTrackLi key={track.songId}>
          <RelatedTrack track={track} />
        </RelatedTrackLi>
      ))}
    </ul>
  );
};

RelatedTracks.propTypes = {
  trackList: PropTypes.instanceOf(Array),
};

RelatedTracks.defaultProps = {
  trackList: [],
};

export default RelatedTracks;
