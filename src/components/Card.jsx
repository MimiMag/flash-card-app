import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseProgress } from '../actions/progress/increase'
import { resetProgress } from '../actions/progress/reset'
import { increaseLevel } from '../actions/level/increase'
import Front from './Front'
import Back from './Back'
import NextLevel from './NextLevel'
import './Card.css'


class Card extends Component {
  state = { code: true, toggleNextLevelDialog: false}

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

  handleWrongButton() {
    this.props.resetProgress()
    this.setState({ code: true })
  }

  handleRightButton() {
    this.props.increaseProgress()
    this.setState({ code: true })
  }

  toggleNextLevelDialog() {
    this.setState({ toggleNextLevelDialog: !this.state.toggleNextLevelDialog })
  }

  renderDialog() {
    if (this.props.progress === 3){
      return (
        <NextLevel 
          closeDialog={() => { this.setState({ toggleNextLevelDialog: false }) }} 
          resetProgress={() => { this.props.resetProgress() }} 
          increaseLevel={ () => { this.props.increaseLevel() }}
        />
      )
    }
    return null
  }

  render() {
    return (
      <div className="card">
        {this.renderFrontOrBack()}
        <div className='buttons'>
          <div className='button wrong' onClick={this.handleWrongButton.bind(this)}>
            <span role='img' className='check'>&#10060;</span>
          </div>
          <div className='button right' onClick={this.handleRightButton.bind(this)}>
            <span role='img' className='check'>&#10003;</span>
          </div>
        </div>
        {this.renderDialog()}
      </div>
    );
  }
}

export default connect(({ progress }) => ({ progress }), {resetProgress, increaseProgress, increaseLevel})(Card)
