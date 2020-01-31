import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LikesAndMore from '../../client/src/components/RelatedTrack/LikesAndMore';

Enzyme.configure({ adapter: new Adapter() });

describe('Like and More Buttons', () => {
  test('Clicking the More Button should call onMoreClick and update the state', () => {
    const wrapper = shallow(<LikesAndMore />);
    const spy = jest.spyOn(wrapper.instance(), 'onMoreClick');
    wrapper.instance().forceUpdate();
    wrapper.find('MoreButton').simulate('click');
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.moreClicked).toEqual(true);
  });

  test('Clicking the Like Button should call onLikeClick and update the state', () => {
    const wrapper = shallow(<LikesAndMore />);
    const spy = jest.spyOn(wrapper.instance(), 'onLikeClick');
    wrapper.instance().forceUpdate();
    wrapper.find('LikeButton').simulate('click');
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.likeClicked).toEqual(true);
  });
});
