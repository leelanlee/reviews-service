import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('<App />', () => {
  it('assert checked', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
