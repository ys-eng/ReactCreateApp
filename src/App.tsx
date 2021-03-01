import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClockComponent from "./components/ClockComponent";

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="absolute">
          <ClockComponent></ClockComponent>
        </div>
    </div>
  );
}

export default App;
