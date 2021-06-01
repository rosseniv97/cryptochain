import React, { Component } from "react";
import HomeView from "./views/Home";
import CarView from "./views/Car";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route path="/viewcar" component={CarView}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
