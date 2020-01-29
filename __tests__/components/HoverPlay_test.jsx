import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedTrack from '../../client/src/components/RelatedTrack';

Enzyme.configure({ adapter: new Adapter() });

describe('onHover Play/Like/More Component', () => {
  describe('clicking on the buttons should change state', () => {
    test('when the play button is clicked, the currently playing song should be updated', () => {});
    test('clicking on the like button should add the song to the user\'s favorites list', () => {});
    test('clicking on the hamburger menu button should render the more subcomponent', () => {});
  });
});
