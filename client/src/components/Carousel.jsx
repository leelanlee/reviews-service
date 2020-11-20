/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import CarouselItem from './CarouselItem';
import GridModal from './GridModal';
import styles from '../styles/Carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowSet: [],
      container: [],
      modal: false,
      leftButton: false,
      carousel: 1,
      moreReviews: false,
    };
    this.handleRightButtonClick = this.handleRightButtonClick.bind(this);
    this.handleLeftButtonClick = this.handleLeftButtonClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    // console.log('track', styles.track);
    const container = document.querySelector(`.${styles.track}`);
    // console.log('CONTAINER', container);
    const rowSet = Array.from(container.children);
    // console.log('ROWSET', rowSet);
    const rowWidth = rowSet[0].getBoundingClientRect().width;
    rowSet[0].style.left = 0;
    rowSet[1].style.left = `${rowWidth}px`;
    this.setState({
      rowSet,
      container,
    });
  }

  handleRightButtonClick() {
    // const currentRow = this.state.rowSet[0];
    const nextRow = this.state.rowSet[1];

    const amountToMove = nextRow.style.left;
    this.state.container.style.transform = `translateX(-${amountToMove})`;

    if (this.state.carousel === 2) {
      this.setState({
        modal: true,
        leftButton: true,
      });
    }
    this.setState({
      carousel: 2,
      leftButton: true,
      moreReviews: true,
    });
  }

  handleLeftButtonClick() {
    // const currentRow = this.state.rowSet[1];
    // const nextRow = this.state.rowSet[0];

    // const amountToMove = nextRow.style.left;
    this.state.container.style.transform = 'translateX(' + '0px' + ')';
    this.setState({
      leftButton: false,
      carousel: 1,
    });
    if (this.state.carousel === 2) {
      this.setState({
        moreReviews: false,
      });
    }
  }

  toggleModal() {
    this.setState({
      modal: false,
    });
  }

  renderCarouselItemAtIndex(index, color) {
    if (this.props.reviews[index] === undefined) {
      return null;
    }
    return <CarouselItem review={this.props.reviews[index]} color={color} handleReviewModal={this.props.handleReviewModal}/>;
  }

  render() {
    return (
      <div>
      <div className={styles.carousel}>
        <button className={this.state.leftButton ? `${styles['carousel-btn']} ${styles['carousel-btn-left']}` : styles.hiddenBtn} onClick={this.handleLeftButtonClick} type="button">
          <img className={this.state.leftButton ? null : styles.hiddenBtn} src="https://www.flaticon.com/svg/static/icons/svg/60/60775.svg" alt="" />
        </button>
          <div className={styles['carousel-container']}>
            <div className={styles.track}>
              <div className={`${styles['flexbox-container-carousel']} ${styles.row}`}>
                {this.renderCarouselItemAtIndex(0, 'rgb(30, 173, 187)')}
                {this.renderCarouselItemAtIndex(1, 'rgb(250,140,104)')}
                {this.renderCarouselItemAtIndex(2, 'rgb(206,182,255)')}
                {this.renderCarouselItemAtIndex(3, 'rgb(116,6,49)')}
              </div>
              <div className={`${styles['flexbox-container-carousel']} ${styles.row}`}>
                {this.renderCarouselItemAtIndex(4, 'rgb(242,196,48)')}
                {this.renderCarouselItemAtIndex(5, 'rgb(5,34,134)')}
                {this.renderCarouselItemAtIndex(6, 'rgb(254,94,63)')}
                {this.renderCarouselItemAtIndex(7, 'rgb(7,173,187)')}
              </div>
            </div>
          </div>
        <button className={`${styles['carousel-btn']} ${styles['carousel-btn-right']}`} type="button" onClick={this.handleRightButtonClick}>
        {this.state.moreReviews === false ? <img src="https://www.flaticon.com/svg/static/icons/svg/60/60758.svg" alt="" /> : `+` }
        </button>
      </div>
      {this.state.modal === true ? <GridModal reviews={this.props.reviews} toggleModal={this.toggleModal}/> : null}
      </div>
    );
  }
}

export default Carousel;
