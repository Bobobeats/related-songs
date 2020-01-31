import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistProfile from '../../client/src/components/RelatedTrack/ArtistProfile';

Enzyme.configure({ adapter: new Adapter() });

describe('Artist Profile Component', () => {
  describe('will call onFollow on button click and update the state', () => {
    test("if not following, upon clicking the state should be changed to 'following'", () => {
      const relatedTrack = {
        songId: 31371,
        artist: 'Tristian Wilderman',
        avatarUrl: 'https://loremflickr.com/50/50/face?random=2',
        location: 'Hestershire',
        followers: 4521,
        title: 'Savings Account Indiana encryption',
        albumArt: 'https://picsum.photos/50/50?random=126',
        plays: 704683,
        likes: 15552,
        reposts: 68781,
        comments: 435,
        tags: ['Rap/Hip Hop'],
      };

      const wrapper = shallow(<ArtistProfile track={relatedTrack} />);
      const spy = jest.spyOn(wrapper.instance(), 'onFollow');
      wrapper.instance().forceUpdate();
      wrapper.find('.followbutton').simulate('click');
      expect(spy).toHaveBeenCalled();
      expect(wrapper.instance().state.following).toEqual(true);
    });
  });
});
