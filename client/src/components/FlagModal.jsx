/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// import PropTypes from 'prop-types';
import styles from '../styles/FlagModal.css';
import ModalItems from './ModalItems';

class FlagModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalHeight: true,
    };
  }

  render() {
    return (
      <div className={styles.flagReviewBackground} onClick={() => this.props.toggleReviewModalOff()}>
        <div className={styles.flagReviewContainer}>
          <div className={styles.align}>
          <button className={styles.closeFlag} type="button" onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover} onClick={() => this.props.handleModalToggle()}>X</button>
          </div>
          <div className={styles.flagContent}>
            <h2>Report this content</h2>
            <p className={styles.flagGuidelines}>Please refer to Trulia's Community Guidelines and let us know why you think the content you're reporting may violate these guidelines</p>
            <form className={styles.flagForm}>
              <input type="radio" id="inapproriate" name="report" value="inapproriate"></input>
              <label for="inapproriate">Inapproriate, offensive or unneighborly</label><br></br>
              <input type="radio" id="relevant" name="report" value="relevant"></input>
              <label for="relevant">Not relevant, talks about the wrong neighborhood or a specific property</label><br></br>
              <input type="radio" id="commercial" name="report" value="commercial"></input>
              <label for="commercial">Commercial, promotional or spam</label><br></br>
              <input type="radio" id="duplicate" name="report" value="duplicate"></input>
              <label for="duplicate">Duplicate content</label>
            </form>
            <button type="button" className={styles.report}>Report</button><span><button type="button" className={styles.cancel}>Cancel</button></span>
          </div>
        </div>
      </div>
    );
  }
}

export default FlagModal;

