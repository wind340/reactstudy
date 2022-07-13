const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    text: "Hello World! welcome webpack!",
  };

  render() {
    <div>{this.state.text}</div>;
  }
}

export default WordRelay;
