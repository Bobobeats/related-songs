import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlayPause from '../../client/src/components/RelatedTrack/PlayPause';

Enzyme.configure({ adapter: new Adapter() });

describe('onHover Play/Like/More Component', () => {
  describe('clicking on the play and pause buttons will update the isPlaying state', () => {
    test('upon initial click, it should call the clickPlay method to update the state to true; click again will toggle the isPlaying state to false', () => {
      const wrapper = shallow(<PlayPause />);
      const spy = jest.spyOn(wrapper.instance(), 'clickPlay');
      wrapper.instance().forceUpdate();
      wrapper.find('PlayButton').first().simulate('click');
      expect(spy).toHaveBeenCalled();
      expect(wrapper.state().isPlaying).toEqual(true);
      wrapper.find('PauseButton').first().simulate('click');
      expect(spy).toHaveBeenCalled();
      expect(wrapper.state().isPlaying).toEqual(false);
    });
  });
});
