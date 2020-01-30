import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedTrack from '../../client/src/components/RelatedTrack/RelatedTrack';

Enzyme.configure({ adapter: new Adapter() });

describe('Related Track Component', () => {
  describe('renders', () => {
    test('should correctly render a single Related Track Component', () => {
      const relatedTrack = {
        songId: 31371,
        artist: 'Tristian Wilderman',
        avatarUrl: 'https://loremflickr.com/50/50/face?random=2',
        location: 'Hestershire',
        title: 'Savings Account Indiana encryption',
        albumArt: 'https://picsum.photos/50/50?random=126',
        plays: 704683,
        likes: 15552,
        reposts: 68781,
        comments: 435,
        tags: ['Rap/Hip Hop'],
      };
      const wrapper = shallow(<RelatedTrack track={relatedTrack} />);
      expect(wrapper.exists()).toEqual(true);
    });
  });
});
