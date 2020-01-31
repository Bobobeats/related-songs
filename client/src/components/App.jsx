import React from 'react';
import RelatedTracks from './RelatedTracks';
import {
  Header,
  HeaderContainer,
  EqualizerIcon,
} from './RelatedTrack/styles';

const sampleList = [{
  songId: 71937,
  artist: 'Brendan Corwin',
  followers: 4521,
  avatarUrl: 'https://loremflickr.com/120/120',
  title: 'repurpose Handmade eyeballs',
  albumArt: 'https://loremflickr.com/50/50',
  plays: 796333,
  likes: 117160,
  reposts: 22896,
  comments: 381,
  tags: ['Pop'],
},
{
  songId: 71938,
  artist: 'Alena Brakus',
  followers: 10739,
  avatarUrl: 'https://loremflickr.com/120/120',
  title: 'paradigms platforms programming',
  albumArt: 'https://loremflickr.com/50/50',
  plays: 345859,
  likes: 30567,
  reposts: 22064,
  comments: 102,
  tags: ['Chill'],
},
{
  songId: 71939,
  artist: 'ofelia',
  avatarUrl: 'https://loremflickr.com/120/120',
  followers: 2341,
  title: 'turquoise seize',
  albumArt: 'https://loremflickr.com/50/50',
  plays: 380199,
  likes: 27587,
  reposts: 26448,
  comments: 15,
  tags: ['Dance', 'EDM'],
}];

const App = () => {
  return (
    <div style={{ width: '300px' }}>
      <HeaderContainer>
        <Header>
          <EqualizerIcon size="24px" />
          <span style={{ display: 'inline-block' }}>Related Tracks</span>
        </Header>
        <span>View All</span>
      </HeaderContainer>
      <RelatedTracks trackList={sampleList} />
    </div>
  );
};

export default App;
