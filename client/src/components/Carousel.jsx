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
    };
    this.handleRightButtonClick = this.handleRightButtonClick.bind(this);
    this.handleLeftButtonClick = this.handleLeftButtonClick.bind(this);
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

  handleRightButtonClick() {
    const container = document.querySelector('.carousel-container');
    const rowSet = Array.from(container.children);
    const rowWidth = rowSet[0].getBoundingClientRect().width;
    rowSet[0].style.left = 0 + 'px';
    rowSet[1].style.left =  rowWidth + 'px';

    const currentRow = rowSet[0];
    const nextRow = rowSet[1];

    const amountToMove = nextRow.style.left;
    container.style.transform = 'translateX(-' + amountToMove + ')';
  };

  handleLeftButtonClick() {
    const container = document.querySelector('.carousel-container');
    const rowSet = Array.from(container.children);
    const rowWidth = rowSet[0].getBoundingClientRect().width;
    rowSet[1].style.left = 0 + 'px';
    rowSet[0].style.left =  rowWidth + 'px';

    const currentRow = rowSet[1];
    const nextRow = rowSet[0];

    const amountToMove = nextRow.style.left;
    container.style.transform = 'translateX(' + '2px' + ')';
  };

  render() {
    return (
      <div className="carousel">
        <button className="carousel-btn carousel-btn-left" onClick={this.handleLeftButtonClick}>
          <img src="https://www.pngfind.com/pngs/m/141-1415532_png-file-svg-carousel-button-left-right-transparent.png" />
        </button>
        <div className="carousel-container">
          <div className="flexbox-container-carousel row current-row">
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
        <button className="carousel-btn carousel-btn-right">
          <img src="https://www.pngfind.com/pngs/m/141-1415532_png-file-svg-carousel-button-left-right-transparent.png" onClick={this.handleRightButtonClick}/>
        </button>
      </div>
    );
  }
}

export default Carousel;
