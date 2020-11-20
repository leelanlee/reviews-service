/* eslint-disable arrow-body-style */
import React from 'react';
import styles from '../styles/Header.css';

const Header = ({ neighborhoodName, reviewsTotal }) => {
  return (
    <div className={styles.header}>
      <h3>
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

export default Header;
