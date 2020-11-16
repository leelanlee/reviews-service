/* eslint-disable arrow-body-style */
import React from 'react';
import './Carousel.css';
import axios from 'axios';

class Carousel extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `${window.location}neighborhood_reviews`,
      // params: {
      //   category: props.selected.toLowerCase(),
      // }
    })
      .then(result => {
        console.log('Get request reviews success');
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
    <div>
      <h3>
        What Locals Say about
      </h3>
    </div>
    );
  }
}

export default Carousel;
