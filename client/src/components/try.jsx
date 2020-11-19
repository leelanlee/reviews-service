import React from 'react';
import styles from './Carousel.css';
import styleModal from './Modal.css';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';

class CarouselItem extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    }
  }

  render() {
    return (
      <div {this.state.modal === true ? className={styleModal.modalBackground} : null}>
        <div {this.state.modal === true ? className={`${styles['flexbox-item-carousel']} ${styleModal.modalContainer}`} : className={styles['flexbox-item-carousel']}}  style={{backgroundColor: props.color}}>
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
          <div className={styles.review}>
          {props.review.likes}
          </div>
        </div>
      </div>
    )
  }
};

export default CarouselItem;
