import React from "react";
import "./container.css";
import WithCounter from "./hoc/withCounter";
class HoverCounter extends React.Component {
  render() {
    const { onIncrement, count, title } = this.props;
    return (
      <div onMouseOver={onIncrement} className="container">
        <h5>
          {count} {title}
        </h5>
      </div>
    );
  }
}
export default WithCounter(HoverCounter);
