/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Carousel from '../client/src/components/Carousel';
import CarouselItem from '../client/src/components/CarouselItem';

describe('<Carousel />', () => {
  const propReviews = [
    {
      full_text: 'Laborum amet mollit velit proident cillum et et occaecat commodo sunt consequat nisi adipisicing sint. Aute officia Lorem veniam eu cillum amet. Lorem eu ea velit anim dolore proident excepteur labore.',
      likes: 38,
      user_type: 'Resident',
      username: 'Kevin Beer',
    },
    {
      full_text: 'Laborum amet mollit velit proident cillum et et occaecat commodo sunt consequat nisi adipisicing sint. Aute officia Lorem veniam eu cillum amet. Lorem eu ea velit anim dolore proident excepteur labore.',
      likes: 38,
      user_type: 'Resident',
      username: 'Kevin Beer',
    },
    {
      full_text: 'Laborum amet mollit velit proident cillum et et occaecat commodo sunt consequat nisi adipisicing sint. Aute officia Lorem veniam eu cillum amet. Lorem eu ea velit anim dolore proident excepteur labore.',
      likes: 38,
      user_type: 'Resident',
      username: 'Kevin Beer',
    },
    {
      full_text: 'Laborum amet mollit velit proident cillum et et occaecat commodo sunt consequat nisi adipisicing sint. Aute officia Lorem veniam eu cillum amet. Lorem eu ea velit anim dolore proident excepteur labore.',
      likes: 38,
      user_type: 'Resident',
      username: 'Kevin Beer',
    },
    {
      full_text: 'Laborum amet mollit velit proident cillum et et occaecat commodo sunt consequat nisi adipisicing sint. Aute officia Lorem veniam eu cillum amet. Lorem eu ea velit anim dolore proident excepteur labore.',
      likes: 38,
      user_type: 'Resident',
      username: 'Kevin Beer',
    },
  ];

  it('assert exists', () => {
    const wrapper = mount(<Carousel />); // mount
    expect(wrapper.exists()).toBe(true);
  });
  it('expect 5 CarouselItem to exist', () => {
    const wrapper = shallow(<Carousel />);
    wrapper.setState({ reviews: propReviews });
    expect(wrapper.find(CarouselItem)).toHaveLength(5);
  });
});
