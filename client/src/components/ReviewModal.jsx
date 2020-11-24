/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ReviewModal.css';
import ModalItems from './ModalItems';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalHeight: true,
    };
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

ReviewModal.propTypes = {
  toggleReviewModalOff: PropTypes.function,
  review: PropTypes.object,
};

export default ReviewModal;
