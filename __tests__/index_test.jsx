import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';

Enzyme.configure({ adapter: new Adapter() });

test('App has the rendered text of "Hello Jest"', () => {
  const app = shallow(<App />);
  expect(app.text()).toEqual('Hello Jest');
});
