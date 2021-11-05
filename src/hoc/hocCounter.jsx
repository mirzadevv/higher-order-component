import React from "react";

const HocCounter = (WrappedComponent) => {
  class HocCounter extends React.Component {
    state = {
      count: 0,
    };

    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          onIncrement={this.handleIncrement}
        />
      );
    }
  }
  return HocCounter;
};

export default HocCounter;
