import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from '../styles/Reviews.css';
import Carousel from './Carousel.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      reviews: this.props.reviews,
    };
    this.handleReviewsClick = this.handleReviewsClick.bind(this);
    this.handleOnButtonHover = this.handleButtonOnHover.bind(this);
    this.handleaOffButtonHover = this.handleButtonOffHover.bind(this);
  }

  componentDidUpdate(lastProps) {
    if (lastProps.reviews.length === 0 && this.props.reviews.length !== 0) {
      this.setState({
        reviews: this.props.reviews,
      });
    }
  }

  handleReviewsClick(e) {
    let selectedCategory = e.target.innerHTML.toLowerCase();
    if (selectedCategory === 'dog owners') {
      selectedCategory = 'dog_owner';
    } else if (selectedCategory === 'parents') {
      selectedCategory = 'parent';
    }
    axios({
      method: 'get',
      url: `${window.location}neighborhood_reviews`,
      params: {
        category: selectedCategory,
      },
    })
      .then((result) => {
        this.setState({
          selected: selectedCategory,
          reviews: result.data,
        });
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
        <div className={styles.reviewsBar}>
          <span><button type="button" className={styles.reviewsbtn} onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>All</button></span>
          <span><button type="button" className={styles.reviewsbtn} onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>Community</button></span>
          <span><button type="button" className={styles.reviewsbtn} onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>Dog Owners</button></span>
          <span><button type="button" className={styles.reviewsbtn} onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>Parents</button></span>
          <span><button type="button" className={styles.reviewsbtn} onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>Commute</button></span>
        </div>
        <div>
          <Carousel selected={this.state.selected} reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default Reviews;
