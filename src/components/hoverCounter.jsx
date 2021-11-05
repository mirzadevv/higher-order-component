import React from "react";
import HocCounter from "../hoc/hocCounter";
import "./container.css";
class HoverCounter extends React.Component {
  render() {
    const { onIncrement, count } = this.props;
    return (
      <div onMouseOver={onIncrement} className="container">
        <h5>{count}</h5>
      </div>
    );
  }
}

export default HocCounter(HoverCounter);
