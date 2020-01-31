import React from 'react';
import PropTypes from 'prop-types';
import RelatedTrack from './RelatedTrack/RelatedTrack';
import {
  RelatedTrackUl,
  RelatedTrackLi,
} from './RelatedTrack/styles';

const RelatedTracks = ({ trackList }) => (
  <RelatedTrackUl>
    {trackList.map((track) => (
      <RelatedTrackLi key={track.songId}>
        <RelatedTrack track={track} />
      </RelatedTrackLi>
    ))}
  </RelatedTrackUl>
);

RelatedTracks.propTypes = {
  trackList: PropTypes.instanceOf(Array),
};

RelatedTracks.defaultProps = {
  trackList: [],
};

export default RelatedTracks;
