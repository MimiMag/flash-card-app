import React, { Component } from 'react';
import './Footer.css'
import { connect } from 'react-redux';

class Footer extends Component {
  
  chooseProgressLayout(progress) {
    switch (progress) {
      case 0:
        return 'meter zero'
      case 1:
        return 'meter one'
      case 2:
        return 'meter two'
      default:
        return 'meter'
    }
  }

  renderProgressBar() {
    return(
      <div className={this.chooseProgressLayout(this.props.progress)}>
        <span><span></span></span>
      </div>
    )
  }

  render() {
    return (
      <div className="Footer">
        {this.renderProgressBar()}
      </div>
    );
  }
}

const mapStateToProps = ({ progress }) => ({ progress })

export default connect(mapStateToProps)(Footer)

