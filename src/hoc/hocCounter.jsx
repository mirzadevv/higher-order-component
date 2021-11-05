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
      const { title } = this.props;

      return (
        <WrappedComponent
          count={this.state.count}
          onIncrement={this.handleIncrement}
          title={title}
        />
      );
    }
  }
  return HocCounter;
};

export default HocCounter;
