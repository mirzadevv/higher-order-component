import React from "react";
import ClickCounter from "./components/clickCounter";
import HoverCounter from "./components/hoverCounter";
class App extends React.Component {
  render() {
    return (
      <>
        <ClickCounter title="click counter" />
        <HoverCounter title="hover counter" />
      </>
    );
  }
}

export default App;
