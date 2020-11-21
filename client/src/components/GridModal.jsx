import React from 'react';
import styles from '../styles/GridModal.css';
import ModalItem from './ModalItems';
import Reviews from './Reviews';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,

    };

    this.handleOnButtonHover = this.handleButtonOnHover.bind(this);
    this.handleaOffButtonHover = this.handleButtonOffHover.bind(this);
  }

  randomColor() {
    var colorArr = ['rgb(30, 173, 187)', 'rgb(250,140,104)', 'rgb(206,182,255)', 'rgb(116,6,49)', 'rgb(242,196,48)', 'rgb(5,34,134)', 'rgb(254,94,63)', 'rgb(7,173,187)']
    var randomIndex = Math.floor(Math.random() * (7 - 0 + 1) + 0)
    var selectedColor = colorArr[randomIndex];
    return selectedColor;
  }


  handleButtonOnHover(e) {
    e.target.style.background = 'white';
    e.target.style.color = 'rgb(205, 209, 212)';
  }

  handleButtonOffHover(e) {
    e.target.style.background = 'rgb(205,209,212)';
    e.target.style.color = 'rgb(255, 255, 255)'
  }


  render() {
    return (
    <div className={styles.modalBackground} onClick={() => this.props.toggleModal()}>
      <div className={styles.modalContainer}>
        <div className={styles.navModal}>
          <button className={styles.modalButtons} type="button" onMouseEnter={this.handleButtonOnHover} onMouseLeave={this.handleButtonOffHover}>X</button>
        </div>
        <div className={styles.gridContainer}>
       {this.props.reviews.length > 1 ? this.props.reviews.map((review, index) => <ModalItem review={review} key={index} color={this.randomColor()} />) : null}
        </div>
      </div>
    </div>
    );
  }
}

export default Modal;
