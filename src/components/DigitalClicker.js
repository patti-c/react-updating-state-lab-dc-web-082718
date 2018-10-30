import React, { Component } from 'react';

const colorsArray = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']

export default class DigitalClicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0,
      style: {
        color: colorsArray[0]
      },
      colorNumber: 0
    }
  }

  handleClick = (e) => {
    const augment = ++this.state.timesClicked;
    let newColorNumber = ++this.state.colorNumber;
    if(newColorNumber > 5) {
      newColorNumber = 0;
      this.state.colorNumber = 0;
    }


    this.setState({
      timesClicked: augment,
      style: {
        color: colorsArray[newColorNumber]
      }
    })
  }

  render() {
    return(
      <div>
        DigitalClicker
        <br></br>
        <button style={this.state.style} onClick={this.handleClick}>
          {this.state.timesClicked}
        </button>

      </div>
    )
  }
}
