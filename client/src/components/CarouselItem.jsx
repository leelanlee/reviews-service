import React from 'react';
import styles from './Carousel.css';
import PropTypes from 'prop-types';

const CarouselItem = (props) => (

  <div className={styles['flexbox-item-carousel']} style={{backgroundColor: props.color}}>
    <div className={styles['reviewer-details']}>
      <div className={styles.avatar}>
      </div>
      <div className={styles.username}>
        {props.review.username}
        <div>
          <span>{props.review.user_type}</span>
          <span>{props.review.review_date}</span>
        </div>
      </div>

    </div>
    <div className={`${styles.text} ${styles.fade}`}>
      {props.review.full_text}
    </div>
    <div className={styles.review}>
    {props.review.likes}
    </div>
  </div>
);

export default CarouselItem;
