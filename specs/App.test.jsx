import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/App';

describe('<App />', () => {
  it('assert checked', () => {
    const wrapper = shallow(<App />); // mount
    expect(wrapper.exists()).toBe(true);
  });
});

//wrapper.find(h2).toIncludeText('Reviews)
