import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedTracks from '../../client/src/components/RelatedTracks';

Enzyme.configure({ adapter: new Adapter() });

describe('Related Tracks Component', () => {
  test('should correctly render 3 Related Track subcomponents', () => {
    const relatedTracks = [
      {
        songId: 31382,
        artist: 'johanna',
        avatarUrl: 'https://loremflickr.com/50/50/face?random=235',
        location: 'Lake Veronastad',
        title: 'Borders',
        albumArt: 'https://picsum.photos/50/50?random=201',
        plays: 653513,
        likes: 89440,
        reposts: 20277,
        comments: 303,
        tags: ['Pop'],
      },
      {
        songId: 31380,
        artist: 'carlee',
        avatarUrl: 'https://loremflickr.com/50/50/face?random=319',
        location: 'Nowhere',
        title: 'Reduced',
        albumArt: 'https://picsum.photos/50/50?random=1',
        plays: 857110,
        likes: 84406,
        reposts: 19422,
        comments: 141,
        tags: ['Chill'],
      },
      {
        songId: 31385,
        artist: 'Awesome Frozen Pants back-end tan',
        avatarUrl: 'https://loremflickr.com/50/50/face?random=25',
        location: 'Granthaven',
        title: 'COM next generation',
        albumArt: 'https://picsum.photos/50/50?random=236',
        plays: 752032,
        likes: 13793,
        reposts: 45309,
        comments: 670,
        tags: ['Alternative'],
      },
    ];
    const wrapper = shallow(<RelatedTracks trackList={relatedTracks} />);
    expect(wrapper.children()).toHaveLength(relatedTracks.length);
  });
});
