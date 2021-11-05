import React from "react";
import ClickCounter from "./components/clickCounter";
import HoverCounter from "./components/hoverCounter";
class App extends React.Component {
  render() {
    return (
      <>
        <ClickCounter />
        <HoverCounter />
      </>
    );
  }
}

export default App;
