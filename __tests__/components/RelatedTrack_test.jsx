import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedTrack from '../../client/src/components/RelatedTrack';

Enzyme.configure({ adapter: new Adapter() });

describe('Related Track Component', () => {
  describe('renders', () => {
    test('should correctly render a single Related Track Component', () => {
      const wrapper = shallow(<RelatedTrack />);
      expect(wrapper.exists()).toEqual(true);
    });
  });

  describe('Number display configurations', () => {
    test('should correctly display number properties over 1000000 as x.xxM', () => {
      const input = 1042281;
      const output = '1.04M';

      expect(RelatedTrack.stringifyNumber(input)).toEqual(output);
    });

    test('should correctly display number properties over 10,000 as xx.xK', () => {
      const input = 12481;
      const output = '12.5K';

      expect(RelatedTrack.stringifyNumber(input)).toEqual(output);
    });

    test('should correctly display rounded number properties', () => {
      const input = 14032;
      const output = '14K';

      expect(RelatedTrack.stringifyNumber(input)).toEqual(output);
    });

    test('should correctly display number properties under 10,000 (comma-separated if necessary)', () => {
      const input = 1542;
      const under1K = 843;
      const output = '1,542';
      const under1KOutput = '843';

      expect(RelatedTrack.stringifyNumber(input)).toEqual(output);
      expect(RelatedTrack.stringify(under1K)).toEqual(under1KOutput);
    });
  });
});
