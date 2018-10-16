import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

configure({ adapter: new Adapter() });
describe('App', () => {
  it('should increment value to "one"', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(wrapper.state('counter')).toBe(0);
    instance.onIncrement(true);
    expect(wrapper.state('counter')).toBe(1);
  });
});
