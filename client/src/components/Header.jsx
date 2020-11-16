/* eslint-disable arrow-body-style */
import React from 'react';
import './Header.css';

const Header = ({ neighborhoodName, reviewsTotal }) => {
  return (
    <div className="header">
      <h3>
        What Locals Say about
        {neighborhoodName}
      </h3>
      <div className="locals">
        <span>
          At least
          {reviewsTotal}
          Trulia users voted on each feature.
        </span>
      </div>
    </div>
  );
};

export default Header;
