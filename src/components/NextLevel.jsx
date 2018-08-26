import React, { Component } from 'react';
import './NextLevel.css'
import { connect } from 'react-redux';

class NextLevel extends Component {
  componentWillMount() {
    this.props.randomGif;
  }

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
          <img src={ this.props.randomGif } alt='Congratulations Gif' className='congratsGif'/>
          <h1>Congratulations! </h1>
          <p>You may proceed to the next level.</p>
        </div>
      </div>
    );
  }
}

export default connect(({randomGif}) => ({randomGif}))(NextLevel);
