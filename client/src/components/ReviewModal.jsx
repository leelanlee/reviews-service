import React from 'react';
import styles from '../styles/ReviewModal.css';
import CarouselItem from './CarouselItem';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={styles.modalReviewBackground} onClick={() => this.props.toggleReviewModalOff()}>
        <div className={styles.modalReviewContainer}>
          <CarouselItem review={this.props.review} color={this.props.color}/>
        </div>
      </div>
    );
  }
}

export default ReviewModal;
