/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React from 'react';
// import PropTypes from 'prop-types';
import styles from '../styles/Header.css';

const Header = ({ neighborhoodName, reviewsTotal }) => {
  return (
    <div className={styles.header}>
      <h3 className={styles.headerText}>
        What Locals Say about {neighborhoodName}
      </h3>
      <div className={styles.locals}>
        <span>
          At least {reviewsTotal} Trulia users voted on each feature.
        </span>
      </div>
    </div>
  );
};

// Header.propTypes = {
//   neighborhoodName: PropTypes.string,
//   reviewsTotal: PropTypes.number,
// };

export default Header;
