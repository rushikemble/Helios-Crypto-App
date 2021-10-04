import React from "react";
import App from "./App";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/app" exact component={App} />
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
