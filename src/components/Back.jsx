import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Back.css'

class Back extends Component {


  renderCode() {
    const { levelOneData } = this.props
    return (
      <div className='text'>
        <span className='point'>Declare</span> a
        <span className='point'>{` ${levelOneData.var_name} named `} </span>
        {` ${levelOneData.name} and `}
        <span className='point'>assign </span> it the
        <span className='point'>{` ${levelOneData.type} `}</span>
        {levelOneData.value}.
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className='code'>
          {this.renderCode()}
        </div>
        <div className="container">
          <h2>Variables & Data Types</h2>
          <h4>Write the code</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ levelOneData }) => ({ levelOneData })

export default connect(mapStateToProps)(Back)
