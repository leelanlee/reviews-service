import React from 'react';
import styles from './Modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }

  render() {
    return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
      I am a modal
      </div>
    </div>
    );
  }

}

export default Modal;
