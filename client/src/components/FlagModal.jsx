/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// import PropTypes from 'prop-types';
import styles from '../styles/FlagModal.css';
import ModalItems from './ModalItems';

const FlagModal = (props) => {
  return (
    <div className={styles.flagReviewBackground}>
      <div className={styles.flagReviewContainer}>
        <div className={styles.flagContent}>
          <h2>Report this content</h2>
          <p className={styles.flagGuidelines}>Please refer to Trulia's Community Guidelines and let us know why you think the content you're reporting may violate these guidelines</p>
          <form className={styles.flagForm}>
            <input type="radio" id="inapproriate" name="report" value="inapproriate"></input>
            <label>Inapproriate, offensive or unneighborly</label>
            <br></br>
            <input type="radio" id="relevant" name="report" value="relevant"></input>
            <label>Not relevant, talks about the wrong neighborhood or a specific property</label>
            <br></br>
            <input type="radio" id="commercial" name="report" value="commercial"></input>
            <label>Commercial, promotional or spam</label>
            <br></br>
            <input type="radio" id="duplicate" name="report" value="duplicate"></input>
            <label>Duplicate content</label>
          </form>
          <button type="button" className={styles.report}>Report</button><span><button type="button" className={styles.cancel} onClick={() => props.handleFlagToggle()}>Cancel</button></span>
        </div>
      </div>
    </div>
  );
};

export default FlagModal;
