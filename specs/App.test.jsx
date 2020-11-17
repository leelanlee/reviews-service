import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/App';
import Header from '../client/src/components/Header.jsx';
import Stats from '../client/src/components/Stats.jsx';

describe('<App />', () => {
  it('assert exists', () => {
    const wrapper = shallow(<App />); // mount
    expect(wrapper.exists()).toBe(true);
  });
  it('expect Header to exist', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it('expect Stats to exist', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Stats)).toHaveLength(1);
  });
});

//wrapper.find(h2).toIncludeText('Reviews)
