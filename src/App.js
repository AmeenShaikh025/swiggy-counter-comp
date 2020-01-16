import React, { Component } from "react";
import "./App.css";

import Counter from "./components/Counter";
import Addcomponent from "./components/Addcomponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Addcomponent />
      </div>
    );
  }
}

export default App;
