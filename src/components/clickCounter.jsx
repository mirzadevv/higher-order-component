import React from "react";
import "./container.css";

class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="container">
        <h5>{count} </h5>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default ClickCounter;
