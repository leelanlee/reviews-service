import React from 'react';
import styles from '../styles/ReviewModal.css';
import ModalItems from './ModalItems';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalHeight: true,
    }
  }


  render() {
    return (
      <div className={styles.modalReviewBackground} onClick={() => this.props.toggleReviewModalOff()}>
        <div className={styles.modalReviewContainer}>
          <ModalItems review={this.props.review} color={this.props.color} height={true}/>
        </div>
      </div>
    );
  }
}

export default ReviewModal;
