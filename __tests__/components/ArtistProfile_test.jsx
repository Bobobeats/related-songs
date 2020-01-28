import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedTrack from '../../client/src/components/RelatedTrack';
import ArtistProfile from '../../client/src/components/ArtistProfile';

Enzyme.configure({ adapter: new Adapter() });

describe('Artist Profile Component', () => {
  describe('should have a following button that can be clicked and will change to reflect following status', () => {
    test("if not following, upon clicking the state should be changed to 'following'", () => {});
  });
  describe('should have other information regarding the artist', () => {
    test("it should display a message to visit the artist's profile upon hovering on their name", () => {});
    test('if the artist has a location specified in their profile, the location should be displayed', () => {});
  });
});
