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
      params: {
        category: 'parent',
      }
    })
      .then(result => {
        console.log('results', result.data);
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

  renderCarouselItemAtIndex(index, color) {
    if (this.state.reviews[index] === undefined) {
      return null;
    } else {
      return <CarouselItem review={this.state.reviews[index]}/>
    }
  }

  render() {
    return (
      <div className="carousel">
        <button className="carousel-btn carousel-btn-left" onClick={this.handleLeftButtonClick}>
          <img src="https://www.pngfind.com/pngs/m/141-1415532_png-file-svg-carousel-button-left-right-transparent.png" />
        </button>
        {this.state.reviews.length > 0 ? <div className="carousel-container">
          <div className="track">
          <div className="flexbox-container-carousel row current-row">
            {this.renderCarouselItemAtIndex(0)}
            {this.renderCarouselItemAtIndex(1)}
            {this.renderCarouselItemAtIndex(2)}
            {this.renderCarouselItemAtIndex(3)}
          </div>
          <div className="flexbox-container-carousel row">
            {this.renderCarouselItemAtIndex(4)}
            {this.renderCarouselItemAtIndex(5)}
            {this.renderCarouselItemAtIndex(6)}
            {this.renderCarouselItemAtIndex(7)}
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
