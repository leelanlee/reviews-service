import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Header from './Header';
import Stats from './Stats';
import Reviews from './Reviews';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewsTotal: 0,
      neighborhoodName: '',
      stats: {},
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:8010/api/listings/3/neighborhood_reviews',
    })
      .then(result => {
        console.log('Get request reviews success');
        this.setState({
          reviewsTotal: result.data.length,
        });
      })
      .catch((err) => console.log(err));

    axios({
      method: 'get',
      url: 'http://localhost:8010/api/listings/3/neighborhood_stats',
    })
      .then(result => {
        console.log('Get request stats success');
        this.setState({
          neighborhoodName: result.data[0].name,
          stats: result.data[0].stats,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="neighborhood">
        <div className="neighborhood">
          <Header neighborhoodName={this.state.neighborhoodName} reviewsTotal={this.state.reviewsTotal}/>
        </div>
        <div>
          <Stats stats={this.state.stats}/>
        </div>
        <Reviews />
      </div>
    );
  }
}

export default App;
