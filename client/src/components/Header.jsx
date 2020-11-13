import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <h3>What Locals Say about {props.neighborhoodName}</h3>
      <div className="locals">
        <span>At least {props.reviewsTotal} Trulia users voted on each feature.</span>
      </div>
    </div>
  );
};


export default Header;