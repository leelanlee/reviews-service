/* eslint-disable arrow-body-style */
import React from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.css';
import axios from 'axios';

class Carousel extends React.Component {
  constructor(props) {
    console.log(props.selected)
    super(props);
    this.state = {
      reviews: [],
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `${window.location}neighborhood_reviews`,
    })
      .then(result => {
        console.log('GGGet request reviews success');
        this.setState({
          reviews: result.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="carousel">
        <button className="carousel-btn carousel-btn-left">
          <img src="https://www.pngfind.com/pngs/m/141-1415532_png-file-svg-carousel-button-left-right-transparent.png" />
        </button>
        <div className="carousel-track-container">
          <div className="flexbox-container-carousel row">
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
          </div>
          <div className="flexbox-container-carousel row">
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
          </div>
        </div>
        <button className="carousel-btn carousel-btn-left">
          <img src="https://www.pngfind.com/pngs/m/141-1415532_png-file-svg-carousel-button-left-right-transparent.png" />
        </button>
      </div>
    );
  }
}

export default Carousel;
