import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from '../styles/Reviews.css';
import Carousel from './Carousel.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      toggle: this.props.toggle,
      button: 'all',
    };
    this.handleReviewsClick = this.handleReviewsClick.bind(this);
    this.handleButtonOnHover = this.handleButtonOnHover.bind(this);
    this.handleButtonOffHover = this.handleButtonOffHover.bind(this);
  }

  componentDidUpdate(lastProps) {
    if (lastProps.reviews.length === 0 && this.props.reviews.length !== 0) {
      this.setState({
        reviews: this.props.reviews,
      });
    }
  }

  handleReviewsClick(e) {
    var hi = document.querySelectorAll(`.${styles.reviewsbtn}`);
    console.log(hi);
    for (var i = 0; i < hi.length; i++) {
      hi[i].style.background = 'rgb(245, 246, 247)';
    }
    e.target.style.background = "white";
    this.setState({
      button: e.target.innerHTML.toLowerCase(),
    });
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
          reviews: result.data,
        });
      });
  }

  handleButtonOnHover(e) {
    console.log('on', this.state.button)
    if (e.target.innerHTML.toLowerCase() !== this.state.button) {
      e.target.style.background = 'rgb(222, 224, 227)';
    }
  }

  handleButtonOffHover(e) {
    console.log('off', this.state.button)
    if (e.target.innerHTML.toLowerCase() !== this.state.button) {
      e.target.style.background = 'rgb(245, 246, 247)';
    }
  }

  render() {
    return (
      <div>
        <div className={styles.reviewsBar}>
          <span><button id="all" type="button" className={this.state.button === 'all' ? `${styles.reviewsbtn} ${styles.selectedBtn}` : styles.reviewsbtn} onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>All</button></span>
          <span><button type="button" className={this.state.button === 'community' ? `${styles.reviewsbtn} ${styles.selectedBtn}` : styles.reviewsbtn} onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>Community</button></span>
          <span><button type="button" className={this.state.button === 'dog owners' ? `${styles.reviewsbtn} ${styles.selectedBtn}` : styles.reviewsbtn} onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>Dog Owners</button></span>
          <span><button type="button" className={this.state.button === 'parents' ? `${styles.reviewsbtn} ${styles.selectedBtn}` : styles.reviewsbtn} onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>Parents</button></span>
          <span><button type="button" className={this.state.button === 'commute' ? `${styles.reviewsbtn} ${styles.selectedBtn}` : styles.reviewsbtn} onClick={this.handleReviewsClick} onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>Commute</button></span>
        </div>
        <div>
          {this.state.toggle ? <Carousel reviews={this.state.reviews} handleReviewModal={this.props.handleReviewModal}/> : null}
        </div>
      </div>
    );
  }
}

export default Reviews;
