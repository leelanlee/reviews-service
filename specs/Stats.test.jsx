import React from 'react';
import { mount, shallow } from 'enzyme';
import Stats from '../client/src/components/Stats';
import StatsItem from '../client/src/components/StatsItem';


describe('<Stats />', () => {
  it('assert exists', () => {
    const wrapper = mount(<Stats />); // mount
    expect(wrapper.exists()).toBe(true);
  });
  it('expect 16 StatsItem to exist', () => {
    const wrapper = mount(<Stats />);
    expect(wrapper.find(StatsItem)).toHaveLength(16);
  });
});