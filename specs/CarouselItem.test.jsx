import React from 'react';
import { mount, shallow } from 'enzyme';
import CarouselItem from '../client/src/components/CarouselItem.jsx';
import GridModal from '../client/src/components/GridModal.jsx';

describe('<CarouselItem />', () => {
  const propReview = {
      full_text: 'Laborum amet mollit velit proident cillum et et occaecat commodo sunt consequat nisi adipisicing sint. Aute officia Lorem veniam eu cillum amet. Lorem eu ea velit anim dolore proident excepteur labore.',
      likes: 38,
      user_type: 'Resident',
      username: 'Kevin Beer',
      review_date: '11/3/2020',
  };
  it('modal should not render when modal state is set to false', () => {
    const wrapper = shallow(<CarouselItem review={propReview}/>);
    wrapper.setState({ modal: false });
    wrapper.setProps({ review: propReview });
    expect(wrapper.find(GridModal)).toHaveLength(0);
  });
});