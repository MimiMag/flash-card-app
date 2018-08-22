import React, { Component } from 'react';
import './Footer.css'
import { connect } from 'react-redux';

class Footer extends Component {
  
  chooseProgressLayout(progress) {
    switch (progress) {
      case 0:
        return 'progress zero'
      case 1:
        return 'progress one'
      case 2:
        return 'progress two'
      default:
        return 'progress'
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

