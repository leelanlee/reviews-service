import React from 'react';
import styles from '../styles/Modal.css';
import CarouselItem from './CarouselItem';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }

  // renderCarouselItemAtIndex(index, color) {
  //   if (this.props.reviews[index] === undefined) {
  //     return null;
  //   }
  //   return <CarouselItem review={this.props.reviews[index]} color={color} />;
  // }

  // createGridOfReviews(reviews) {

  //   <div className={styles['flexbox-container-grid']}>
  //   </div>

  //   var count = 0;
  //   for (var i = 0; i < reviews.length; i++) {
  //     if (count === 0) {

  //     }
  //   }
  // }

  render() {
    return (
    <div className={this.props.modal === true ? styles.modalBackground : null}>
      <div className={this.props.modal === true ? styles.modalContainer : null}>
        <div className={styles.gridContainer}>
       {this.props.reviews.map(review => <CarouselItem review={review} color={'red'} />)}
        </div>
      </div>
    </div>
    );
  }

}

export default Modal;
