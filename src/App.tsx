import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ClockComponent from "./routes/clock/ClockPage";
import CalculatorComponent from "./routes/calculator/CalculatorPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/clock" exact component={ClockComponent} />
        <Route path="/calculator" exact component={CalculatorComponent} />
        <Redirect to="/clock" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;