import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Header from './Header';
import Stats from './Stats';
import Reviews from './Reviews';
import styles from '../styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewsTotal: 0,
      reviews: [],
      neighborhoodName: '',
      stats: {},
    };
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
        <Reviews reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default App;
