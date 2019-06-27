import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentColor: this.props.currentColor
    }
  }

  setNewColor = (event) => {
    console.log(event.target.style["background-color"])
    event.target.style["background-color"] = this.state.currentColor
  }

  render() {
    return (
      <div className="cell"
        style={{ backgroundColor: this.state.currentColor }}
        onClick={this.setNewColor}>
      </div>
    )
  }

}
