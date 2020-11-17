import React from 'react';
import './Carousel.css';
import PropTypes from 'prop-types';

const CarouselItem = (props) => (

  <div className="flexbox-item-carousel" style={{backgroundColor: props.color}}>
    <div className="reviewer-details">
      {props.review.username}
    </div>
    <div className="review">
    {props.review.likes}
    </div>
    <div className="text fade">
      {props.review.full_text}
    </div>
  </div>
);

export default CarouselItem;
