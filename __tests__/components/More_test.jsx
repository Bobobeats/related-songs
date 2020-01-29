import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedTrack from '../../client/src/components/RelatedTrack';
import More from '../../client/src/components/More';

Enzyme.configure({ adapter: new Adapter() });

describe('More Component', () => {
  describe('when clicked, it should render a list of interactive options', () => {
    test('when the share item is clicked, it should render the share subcomponent', () => {});
  });
});
