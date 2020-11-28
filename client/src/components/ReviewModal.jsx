/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// import PropTypes from 'prop-types';
import styles from '../styles/ReviewModal.css';
import ModalItems from './ModalItems';

const ReviewModal = ({ review, color, toggleReviewModalOff }) => {
  return (
    <div className={styles.modalReviewBackground}>
      <div className={styles.modalReviewContainer}>
        <ModalItems review={review} color={color} height={true} button={true} toggleReviewModalOff={toggleReviewModalOff} />
      </div>
    </div>
  );
};

// ReviewModal.propTypes = {
//   toggleReviewModalOff: PropTypes.function,
//   review: PropTypes.object,
// };

export default ReviewModal;
