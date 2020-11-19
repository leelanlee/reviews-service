import React from 'react';
import styles from '../styles/CarouselItem.css';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';

const CarouselItem = (props) => (

  <div className={styles['flexbox-item-carousel']} style={{backgroundColor: props.color}}>
    <div className={styles['reviewer-details']}>
      <div className={styles.avatar}>
        <div className={styles.avatarPic}><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M11.598 10.564a4.485 4.485 0 1 0 8.97 0 4.485 4.485 0 0 0-8.97 0zm-2.66 0a7.145 7.145 0 1 1 14.29 0 7.145 7.145 0 0 1-14.29 0zm7.146 7.145c-4.021 0-7.318 3.238-7.318 6.938v.609h14.635v-.609c0-3.7-3.297-6.938-7.317-6.938zm0-2.66c5.424 0 9.977 4.365 9.977 9.598v3.269H6.106v-3.269c0-5.234 4.552-9.598 9.978-9.598z" fill="#869099"></path></svg></div>
      </div>
      <div className={styles.username}>
        {props.review.username}
        <div className={styles.residentDetails}>
          <span className={styles.resident}>{props.review.user_type}</span>
          <span><TimeAgo date={props.review.review_date}></TimeAgo></span>
        </div>
      </div>
    </div>
    <div className={`${styles.text} ${styles.fade}`}>
      "{props.review.full_text}"
    </div>
    <div className={styles.other}>
      <div className={styles.likes}>
        <div><svg className={styles.smile} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.96 29.26c-7.345 0-13.3-5.955-13.3-13.3 0-7.345 5.955-13.3 13.3-13.3 7.345 0 13.3 5.955 13.3 13.3 0 7.345-5.955 13.3-13.3 13.3zm0-2.66c5.876 0 10.64-4.764 10.64-10.64S21.836 5.32 15.96 5.32 5.32 10.084 5.32 15.96 10.084 26.6 15.96 26.6zM12.048 9.602a1.995 1.995 0 1 1 0 3.99 1.995 1.995 0 0 1 0-3.99zm7.824 0a1.995 1.995 0 1 1 0 3.99 1.995 1.995 0 0 1 0-3.99zm-11.23 7.174a1.33 1.33 0 0 1 2.66 0 4.658 4.658 0 1 0 9.316 0 1.33 1.33 0 0 1 2.66 0 7.318 7.318 0 0 1-14.636 0z" fill="#F3FFFF"></path></svg></div>
        <div className={styles.likesCount}>{props.review.likes}</div>
      </div>
      <div className={styles.flag}>Flag</div>
    </div>
  </div>
);

export default CarouselItem;
