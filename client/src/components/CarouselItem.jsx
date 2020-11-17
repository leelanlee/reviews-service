import React from 'react';
import './Carousel.css';
import PropTypes from 'prop-types';

const CarouselItem = (props) => (
  <div className="flexbox-item-carousel">
    <div className="reviewer-details">
      {props.review.username}
    </div>
    <div className="review">
    {props.review.likes}
    </div>
    <div className="likes">
      42
    </div>
  </div>
);

export default CarouselItem;
