import React, { useState, useEffect } from 'react';
import RelatedTracks from './RelatedTracks';
import {
  Header,
  HeaderContainer,
  EqualizerIcon,
} from './RelatedTrack/styles';

const App = () => {
  const [trackList, updateTracks] = useState([]);

  function fetchRelatedTracks() {
    fetch('http://localhost:3000/api/songs/24188')
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

export default App;
