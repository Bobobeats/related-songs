import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedTrack from '../../client/src/components/RelatedTrack';
import More from '../../client/src/components/More';

Enzyme.configure({ adapter: new Adapter() });

describe('Share Component', () => {
  describe('when clicked, it should render a modal', () => {
    test('the share component should have 3 tabs', () => {});
  });
});
