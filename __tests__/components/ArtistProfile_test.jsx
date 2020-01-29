import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistProfile from '../../client/src/components/ArtistProfile';

Enzyme.configure({ adapter: new Adapter() });

describe('Artist Profile Component', () => {
  describe('will call onFollow on button click and update the state', () => {
    test("if not following, upon clicking the state should be changed to 'following'", () => {
      const wrapper = shallow(<ArtistProfile />);
      wrapper.find('.followbutton').simulate('click');
      expect(wrapper.instance().onFollow).toHaveBeenCalled();
      expect(wrapper.instance().state.following).toEqual(true);
    });
  });
});
