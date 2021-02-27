import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClockComponent from "./components/ClockComponent";
import ZenigameButton from "./components/ZenigameButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClockComponent></ClockComponent>
      </header>
    </div>
  );
}

export default App;
