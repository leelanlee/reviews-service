import React from 'react';
import { mount, shallow } from 'enzyme';
import GridModal from '../client/src/components/GridModal.jsx';

// describe('<GridModal />', () => {
//   xit('modal should not render when modal state is set to false', () => {
//     const wrapper = shallow(<GridModal review={propReview}/>);
//     wrapper.setState({ modal: false });
//     wrapper.setProps({ review: propReview });
//     expect(wrapper.find(GridModal)).toHaveLength(0);
//   });
// });