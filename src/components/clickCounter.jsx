import React from "react";
import HocCounter from "../hoc/hocCounter";
import "./container.css";
class ClickCounter extends React.Component {
  render() {
    const { onIncrement, count, title } = this.props;
    return (
      <div className="container">
        <h5>
          {count} {title}
        </h5>
        <button onClick={onIncrement}>Increment</button>
      </div>
    );
  }
}

export default HocCounter(ClickCounter);
