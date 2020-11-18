/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import axios from 'axios';
import CarouselItem from './CarouselItem';
import './Carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowSet: [],
      container: [],
    };
    this.handleRightButtonClick = this.handleRightButtonClick.bind(this);
    this.handleLeftButtonClick = this.handleLeftButtonClick.bind(this);
  }

  componentDidMount() {
    const container = document.querySelector('.track');
    const rowSet = Array.from(container.children);
    const rowWidth = rowSet[0].getBoundingClientRect().width;
    rowSet[0].style.left = 0;
    rowSet[1].style.left = `${rowWidth}px`;
    this.setState({
      rowSet,
      container,
    });
  }
  // componentDidMount() {
  //   axios({
  //     method: 'get',
  //     url: `${window.location}neighborhood_reviews`,
  //     params: {
  //       category: this.props.selected,
  //     },
  //   })
  //     .then((result) => {
  //       console.log('results', result.data);
  //       this.setState({
  //       }, () => {
  //         const container = document.querySelector('.track');
  //         const rowSet = Array.from(container.children);
  //         const rowWidth = rowSet[0].getBoundingClientRect().width;
  //         rowSet[0].style.left = 0;
  //         rowSet[1].style.left = `${rowWidth}px`;
  //         this.setState({
  //           rowSet,
  //           container,
  //         });
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

  handleRightButtonClick() {
    // const currentRow = this.state.rowSet[0];
    const nextRow = this.state.rowSet[1];

    const amountToMove = nextRow.style.left;
    this.state.container.style.transform = `translateX(-${amountToMove})`;
  }

  handleLeftButtonClick() {
    // const currentRow = this.state.rowSet[1];
    // const nextRow = this.state.rowSet[0];

    // const amountToMove = nextRow.style.left;
    this.state.container.style.transform = 'translateX(' + '1px' + ')';
  }

  renderCarouselItemAtIndex(index, color) {
    if (this.props.reviews[index] === undefined) {
      return null;
    }
    return <CarouselItem review={this.props.reviews[index]} color={color} />;
  }

  render() {
    return (
      <div className="carousel">
        <button className="carousel-btn carousel-btn-left" onClick={this.handleLeftButtonClick} type="button">
          <img src="https://www.pngfind.com/pngs/m/141-1415532_png-file-svg-carousel-button-left-right-transparent.png" alt="" />
        </button>
          <div className="carousel-container">
            <div className="track">
              <div className="flexbox-container-carousel row current-row">
                {this.renderCarouselItemAtIndex(0, 'rgb(30, 173, 187)')}
                {this.renderCarouselItemAtIndex(1, 'rgb(250,140,104)')}
                {this.renderCarouselItemAtIndex(2, 'rgb(206,182,255)')}
                {this.renderCarouselItemAtIndex(3, 'rgb(116,6,49)')}
              </div>
              <div className="flexbox-container-carousel row">
                {this.renderCarouselItemAtIndex(4, 'rgb(242,196,48)')}
                {this.renderCarouselItemAtIndex(5, 'rgb(5,34,134)')}
                {this.renderCarouselItemAtIndex(6, 'rgb(254,94,63)')}
                {this.renderCarouselItemAtIndex(7, 'rgb(7,173,187)')}
              </div>
            </div>
          </div>
        <button className="carousel-btn carousel-btn-right" type="button" onClick={this.handleRightButtonClick}>
          <img src="https://www.pngfind.com/pngs/m/141-1415532_png-file-svg-carousel-button-left-right-transparent.png" alt="" />
        </button>
      </div>
    );
  }
}

export default Carousel;
