import React from "react";
import "./container.css";
class HoverCounter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div onMouseOver={this.handleIncrement} className="container">
        <h5>{this.state.count}</h5>
      </div>
    );
  }
}

export default HoverCounter;
