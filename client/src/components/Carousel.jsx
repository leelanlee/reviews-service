/* eslint-disable arrow-body-style */
import React from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.css';
import axios from 'axios';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      rowSet: [],
      container: [],
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
        console.log(result.data);
        this.setState({
          reviews: result.data,
        }, () => {
          const container = document.querySelector('.track');
          const rowSet = Array.from(container.children);
          const rowWidth = rowSet[0].getBoundingClientRect().width;
          rowSet[0].style.left = 0;
          rowSet[1].style.left =  rowWidth + 'px';
          this.setState({
            rowSet: rowSet,
            container: container,
          });
        });
      })
      .catch((err) => console.log(err));

  }

  handleRightButtonClick() {
    const currentRow = this.state.rowSet[0];
    const nextRow = this.state.rowSet[1];

    const amountToMove = nextRow.style.left;
    this.state.container.style.transform = 'translateX(-' + amountToMove + ')';
  };

  handleLeftButtonClick() {
    const currentRow = this.state.rowSet[1];
    const nextRow = this.state.rowSet[0];

    const amountToMove = nextRow.style.left;
    this.state.container.style.transform = 'translateX(' + '2px' + ')';
  };

  render() {

    return (
      <div className="carousel">
        <button className="carousel-btn carousel-btn-left" onClick={this.handleLeftButtonClick}>
          <img src="https://www.pngfind.com/pngs/m/141-1415532_png-file-svg-carousel-button-left-right-transparent.png" />
        </button>
        {this.state.reviews.length > 0 ? <div className="carousel-container">
          <div className="track">
          <div className="flexbox-container-carousel row current-row">
            <CarouselItem review={this.state.reviews[0]}/>
            <CarouselItem review={this.state.reviews[1]}/>
            <CarouselItem review={this.state.reviews[2]}/>
            <CarouselItem review={this.state.reviews[3]}/>
          </div>
          <div className="flexbox-container-carousel row">
            <CarouselItem review={this.state.reviews[4]}/>
            <CarouselItem review={this.state.reviews[5]}/>
            <CarouselItem review={this.state.reviews[6]}/>
            <CarouselItem review={this.state.reviews[7]}/>
          </div>
          </div>
        </div> : null }
        <button className="carousel-btn carousel-btn-right">
          <img src="https://www.pngfind.com/pngs/m/141-1415532_png-file-svg-carousel-button-left-right-transparent.png" onClick={this.handleRightButtonClick}/>
        </button>
      </div>
    );
  }
}

export default Carousel;
