import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      currentColor: ''
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} currentColor={val} getColor={this.setColorState} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  setColorState = (event) => {
    this.setState({
      currentColor: event.target.style["background-color"]
    })
    console.log(this.state)
  }

  render() {
    return (
      <div id="app" >
        <ColorSelector currentColor={this.setColorState} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
