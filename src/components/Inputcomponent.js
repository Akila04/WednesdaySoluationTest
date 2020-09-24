import React, { Component } from "react";

class Inputcomponent extends Component {
  constructor() {
    super();
    this.state = {
      output: ""
    };
  }

  onchangehandler = (e) => {
    let character = e.target.value;
    let output = "";
    for (var i = 0; i < character.length; i++) {
      let asciicode = character.charCodeAt(i);
      asciicode = asciicode + 10;
      output = output.concat(String.fromCharCode(asciicode));
    }
    this.setState({ output: output });
  };

  render() {
    return (
      <div>
        <p>Type a character</p>
        <input
          type="text"
          onChange={(e) => {
            this.onchangehandler(e);
          }}
        />
        <p id="outputbutbox">{this.state.output}</p>
      </div>
    );
  }
}

export default Inputcomponent;
