import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RelatedTracks from './RelatedTracks';
import {
  Header,
  HeaderContainer,
  EqualizerIcon,
} from './styles';

const App = (props) => {
  const [trackList, updateTracks] = useState([]);

  function fetchRelatedTracks() {
    const { songId } = props;
    fetch(`/api/relatedTracks/songs/${songId}`)
      .then((resp) => resp.json())
      .then((data) => updateTracks(data));
  }

  useEffect(() => fetchRelatedTracks(), []);

  return (
    <div style={{ width: '300px' }}>
      <HeaderContainer>
        <Header>
          <EqualizerIcon size="24px" />
          <span style={{ display: 'inline-block' }}>Related Tracks</span>
        </Header>
        <span>View all</span>
      </HeaderContainer>
      <RelatedTracks trackList={trackList} />
    </div>
  );
};

App.propTypes = {
  songId: PropTypes.number,
};

App.defaultProps = {
  songId: 0,
};

export default App;
