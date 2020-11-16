import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Reviews.css';
import Carousel from './Carousel';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: '',
      hover: true,
    };
    this.handleReviewsClick = this.handleReviewsClick.bind(this);
    this.handleButtonHover = this.handleButtonHover.bind(this);
  }

  handleReviewsClick(e) {
    this.setState({
      selected: e.target.innerHTML,
    });
  }

  handleButtonHover() {
    this.setState({
      hover: !this.state.hover,
    });
  }

  render() {
    return (
      <div>
        <div className='reviews-bar'>
          <span><button type="button" className={this.state.hover ? "reviews-btn" : "reviews-btn colorReviews1-btn"} onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonHover} onMouseLeave={this.handleButtonHover}>All</button></span>
          <span><button type="button" className={this.state.hover ? "reviews-btn" : "reviews-btn colorReviews2-btn"} onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonHover} onMouseLeave={this.handleButtonHover}>Community</button></span>
          <span><button type="button" className={this.state.hover ? "reviews-btn" : "reviews-btn colorReviews3-btn"} onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonHover} onMouseLeave={this.handleButtonHover}>Dog Owners</button></span>
          <span><button type="button" className={this.state.hover ? "reviews-btn" : "reviews-btn colorReviews4-btn"} onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonHover} onMouseLeave={this.handleButtonHover}>Parents</button></span>
          <span><button type="button" className={this.state.hover ? "reviews-btn" : "reviews-btn colorReviews5-btn"} onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonHover} onMouseLeave={this.handleButtonHover}>Commute</button></span>
        </div>
        <div>
          <Carousel selected={this.state.selected}/>
        </div>
      </div>
    );
  }
}

export default Reviews;
