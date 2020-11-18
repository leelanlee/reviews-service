import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Reviews.css';
import Carousel from './Carousel.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
    };
    this.handleReviewsClick = this.handleReviewsClick.bind(this);
    this.handleOnButtonHover = this.handleButtonOnHover.bind(this);
    this.handleaOffButtonHover = this.handleButtonOffHover.bind(this);
  }

  handleReviewsClick(e) {
    var selectedCategory = e.target.innerHTML.toLowerCase();
    if (selectedCategory === 'dog owners') {
      selectedCategory = 'dog_owner';
    } else if (selectedCategory === 'parents') {
      selectedCategory = 'parent';
    }
    console.log('buttonClick selected', selectedCategory);
    this.setState({
      selected: e.target.selectedCategory,
    });
  }

  handleButtonOnHover(e) {
    e.target.style.background = 'rgb(133, 133, 133)';
  }

  handleButtonOffHover(e) {
    e.target.style.background = 'rgb(245, 246, 247)';
  }


  render() {
    return (
      <div>
        <div className='reviews-bar'>
          <span><button type="button" className="reviews-btn" onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>All</button></span>
          <span><button type="button" className="reviews-btn" onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>Community</button></span>
          <span><button type="button" className="reviews-btn" onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>Dog Owners</button></span>
          <span><button type="button" className="reviews-btn" onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>Parents</button></span>
          <span><button type="button" className="reviews-btn" onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>Commute</button></span>
        </div>
        <div>
          <Carousel selected={this.state.selected} reviews={this.props.reviews} />
        </div>
      </div>
    );
  }
}

export default Reviews;
