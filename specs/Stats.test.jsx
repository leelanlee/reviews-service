import React from 'react';
import { mount, shallow } from 'enzyme';
import Stats from '../client/src/components/Stats';
import StatsItem from '../client/src/components/StatsItem';

describe('<Stats />', () => {
  let propStats = {
    car: 0.36,
    community_events: 0.74,
    dog_friendly: 0.06,
    five_years: 0.61,
    grocery_stores: 0.52,
    holiday: 0.37,
    kids_outside: 0.82,
    neighbors_friendly: 0.53,
    parking_easy: 0.94,
    quiet: 0.26,
    restaurants: 0.14,
    sidewalks: 0.64,
    streets: 0.86,
    walk_night: 0.93,
    wildlife: 0.42,
    yard: 0.02,
  };
  it('assert exists', () => {
    const wrapper = mount(<Stats stats={propStats}/>); // mount
    wrapper.setProps({stats: propStats});
    expect(wrapper.exists()).toBe(true);
  });
  it('expect 16 StatsItem to exist', () => {
    const wrapper = shallow(<Stats stats={propStats} />);
    wrapper.setProps({stats: propStats});
    wrapper.setState({seeAll: true});
    expect(wrapper.find(StatsItem)).toHaveLength(16);
  });
});