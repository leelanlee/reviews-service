import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Reviews.css';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: '',
    };
  }

  render() {
    return (
      <div className='reviews-bar'>
        <span><button className='reviews-btn'>All</button></span>
        <span><button className='reviews-btn'>Community</button></span>
        <span><button className='reviews-btn'>Dog Owners</button></span>
        <span><button className='reviews-btn'>Parents</button></span>
        <span><button className='reviews-btn'>Commute</button></span>
      </div>
    );
  }
}

export default Reviews;
