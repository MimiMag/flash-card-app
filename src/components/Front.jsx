import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Front.css'

class Front extends Component {


  renderCode() {
    const { levelOneData } = this.props
    return(
      <div className='text'>
        <span className='var'>{levelOneData.var} </span> 
        {`${levelOneData.name} = `}  
        <span className={levelOneData.type}> 
            {levelOneData.value}
        </span>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className='code'>
          {this.renderCode()}
        </div>
        <div class="container">
          <h2>Variables & Data Types</h2>
          <h4>Parse this code</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({levelOneData}) => ({levelOneData})

export default connect(mapStateToProps)(Front)
