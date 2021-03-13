import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ClockComponent from "./components/ClockComponent";
import CalculatorComponent from "./components/CalculatorComponent";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ClockComponent} />
        <Route path="/calculator" exact component={CalculatorComponent} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;