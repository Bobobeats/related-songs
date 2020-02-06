import React, { useState, useEffect } from 'react';
import RelatedTracks from './RelatedTracks';
import {
  Header,
  HeaderContainer,
  EqualizerIcon,
} from './styles';

const App = () => {
  const [trackList, updateTracks] = useState([]);

  function fetchRelatedTracks() {
    fetch('/api/songs/635191')
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
