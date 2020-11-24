/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Header from './Header';
import Stats from './Stats';
import Reviews from './Reviews';
import ReviewModal from './ReviewModal';
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
    this.toggleReviewModalOff = this.toggleReviewModalOff.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `${window.location}neighborhood_reviews`,
    })
      .then((result) => {
        console.log('Get request reviews success');
        this.setState({
          reviewsTotal: result.data.length,
          reviews: result.data,
        });
        axios({
          method: 'get',
          url: `${window.location}neighborhood_stats`,
        })
          .then((res) => {
            console.log('Get request stats success');
            this.setState({
              neighborhoodName: res.data[0].name,
              stats: res.data[0].stats,
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
    });
  }

  toggleReviewModalOff() {
    this.setState({
      reviewModal: false,
    });
  }

  render() {
    return (
      <div className={styles.neighborhood}>
        <div className={styles.neighborhood}>
          <Header neighborhoodName={this.state.neighborhoodName} reviewsTotal={this.state.reviewsTotal} />
        </div>
        <div className={styles.stats}>
          <Stats stats={this.state.stats}/>
        </div>
        <Reviews reviews={this.state.reviews} handleReviewModal={this.handleReviewModal} toggle={true}/>
        {this.state.reviewModal ? <ReviewModal review={this.state.reviewCard} color={this.state.reviewColor} on={this.state.reviewModal} toggleReviewModalOff={this.toggleReviewModalOff} /> : null}
      </div>
    );
  }
}

export default App;
