import React, { Component } from 'react';
import './NextLevel.css'

class NextLevel extends Component {
  handleClick() {
    this.props.resetProgress()
    this.props.closeDialog()
    this.props.increaseLevel()
  }
  
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={this.handleClick.bind(this)}>&times;</span>
          <p>Congratulations! You may proceed to the next level!</p>
        </div>
      </div>
    );
  }
}

export default NextLevel;
