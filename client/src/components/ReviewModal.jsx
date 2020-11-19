import React from 'react';
import styles from '../styles/ReviewModal.css';
import CarouselItem from './CarouselItem';

class ReviewModal extends React.Component {
  constructor() {
    super();
    this.state = {
      review: {},
    };
  }



  render() {

    return (
      <div className={styles.modalReviewBackground}>
        <div className={styles.modalReviewContainer}>
          <div className={styles.gridReviewContainer}>
          <CarouselItem review={this.state.review} />
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewModal;
