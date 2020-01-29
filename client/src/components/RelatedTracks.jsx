import React from 'react';
import PropTypes from 'prop-types';
import RelatedTrack from './RelatedTrack';

const RelatedTracks = (props) => {
  const { trackList } = props;
  return (
    <ul>
      {trackList.map((track) => {
        return <li><RelatedTrack track={track} key={track.id} /></li>;
      })}
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
