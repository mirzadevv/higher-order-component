import React from "react";
import HocCounter from "../hoc/hocCounter";
import "./container.css";
class ClickCounter extends React.Component {
  render() {
    const { onIncrement, count } = this.props;
    return (
      <div className="container">
        <h5>{count}</h5>
        <button onClick={onIncrement}>Increment</button>
      </div>
    );
  }
}

export default HocCounter(ClickCounter);
