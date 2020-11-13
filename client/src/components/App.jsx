import React from 'react';
import Header from './Header.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsTotal: 0,
      neighborhoodName: '',
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:8010/api/listings/2/neighborhood_reviews'
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
      url: 'http://localhost:8010/api/listings/2/neighborhood_stats'
    })
      .then(result => {
        console.log('Get request stats success');
        this.setState({
          neighborhoodName: result.data[0].name,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="neighborhood">
        <Header neighborhoodName={this.state.neighborhoodName} reviewsTotal={this.state.reviewsTotal}/>
      </div>
    );
  }
}

export default App;