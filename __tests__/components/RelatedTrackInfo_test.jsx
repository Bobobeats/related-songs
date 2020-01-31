import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedTrackInfo from '../../client/src/components/RelatedTrack/RelatedTrackInfo';

Enzyme.configure({ adapter: new Adapter() });

describe('Related Track Statistics', () => {
  describe('The component should correctly format song statistic info', () => {
    test('should correctly truncate given number props', () => {
      const wrapper = shallow(
        <RelatedTrackInfo
          plays={5723640}
          likes={267785}
          reposts={6051}
          comments={981}
        />,
      );
      wrapper.instance().componentDidMount();
      expect(wrapper.state().formatted.formattedPlays).toEqual('5.72M');
      expect(wrapper.state().formatted.formattedLikes).toEqual('267K');
      expect(wrapper.state().formatted.formattedReposts).toEqual('6,051');
      expect(wrapper.state().formatted.formattedComments).toEqual('981');
    });
  });
});
