import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Header from './Header';
import Stats from './Stats';
import Reviews from './Reviews';
import ReviewModal from './ReviewModal.jsx'
import styles from '../styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewsTotal: 0,
      reviews: [],
      neighborhoodName: '',
      stats: {},
      reviewModal: false,
      reviewCard: {},
      reviewColor: '',
    };
    this.handleReviewModal = this.handleReviewModal.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `${window.location}neighborhood_reviews`,
    })
      .then(result => {
        console.log('Get request reviews success');
        this.setState({
          reviewsTotal: result.data.length,
          reviews: result.data,
        });
        axios({
          method: 'get',
          url: `${window.location}neighborhood_stats`,
        })
          .then(result => {
            console.log('Get request stats success');
            this.setState({
              neighborhoodName: result.data[0].name,
              stats: result.data[0].stats,
            });
          });
      })
      .catch((err) => console.log(err));
  }

  handleReviewModal(review, color) {
    this.setState({
      reviewModal: true,
      reviewCard: review,
      reviewColor: color,
    })
  }
  render() {
    console.log(styles.neighborhood);
    return (
      <div className={styles.neighborhood}>
        <div className={styles.neighborhood}>
          <Header neighborhoodName={this.state.neighborhoodName} reviewsTotal={this.state.reviewsTotal}/>
        </div>
        <div>
          <Stats stats={this.state.stats}/>
        </div>
        <Reviews reviews={this.state.reviews} handleReviewModal={this.handleReviewModal}/>
        {this.state.reviewModal ? <ReviewModal review={this.state.reviewCard} color={this.state.reviewColor} on={this.state.reviewModal}/> : null}
      </div>
    );
  }
}

export default App;
