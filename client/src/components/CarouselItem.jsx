import React from 'react';
import styles from './Carousel.css';
import PropTypes from 'prop-types';

const CarouselItem = (props) => (

  <div className={styles.flexboxItemCarousel} style={{backgroundColor: props.color}}>
    <div className={styles.reviewerDetails}>
      {props.review.username}
    </div>
    <div className={styles.review}>
    {props.review.likes}
    </div>
    <div className={`${styles.text} ${styles.fade}`}>
      {props.review.full_text}
    </div>
  </div>
);

export default CarouselItem;
