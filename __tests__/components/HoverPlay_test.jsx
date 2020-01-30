import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlayLikesMore from '../../client/src/components/RelatedTrack/PlayLikesMore';

Enzyme.configure({ adapter: new Adapter() });

describe('onHover Play/Like/More Component', () => {
  describe('clicking on the buttons should update state', () => {
    test('when the play button is clicked, the currently playing song should be updated', () => {
      const wrapper = shallow(<PlayLikesMore />);
      wrapper.find('.playbutton').simulate('click');
      expect(wrapper.instance().onPlayClick).toHaveBeenCalled();
    });
    test('clicking on the like button should add the song to the user\'s favorites list and update the songs likes total in the db', () => {
    });
    test('clicking on the hamburger menu button should render the more subcomponent', () => {
      const wrapper = shallow(<PlayLikesMore />);
      expect(wrapper.find('ul').children()).toHaveLength(5);
    });
  });
});
