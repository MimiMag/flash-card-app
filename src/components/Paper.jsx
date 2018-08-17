import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increaseProgress } from '../actions/progress/increase'
import { resetProgress } from '../actions/progress/reset'
import Front from './Front'
import Back from './Back'
import './Paper.css'


class Paper extends Component {
  state = { code: true }

  renderFrontOrBack() {

    if(this.state.code){ 
      return( 
        <div onClick={ () => {this.setState({code: false}) }}>
          <Front />
        </div>
      )
    }
    return(
      <div onClick={() => { this.setState({ code: true }) }}>
        <Back />
      </div>
    )
  }

  render() {
    return (
      <div className="paper">
        {this.renderFrontOrBack()}
        <div className='buttons'>
          <div className='button wrong' onClick={this.props.resetProgress}><span role='img' className='check'>&#10060;</span></div>
          <div className='button right' onClick={this.props.increaseProgress}><span role='img' className='check'>&#10003;</span></div>
        </div>
      </div>
    );
  }
}

export default connect(null, {resetProgress, increaseProgress})(Paper)
