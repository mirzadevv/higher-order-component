import React from "react";
import "./container.css";
import WithCounter from "./hoc/withCounter";
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
export default WithCounter(ClickCounter);
