import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "./views/Home";
import CarView from "./views/Car";
import CarsList from './views/CarsList';
import UserCarsView from "./views/UserCars";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView}/>
          <Route path="/viewcar" component={CarView}/>
          <Route path="/view-taken-cars" component={UserCarsView} />
        </Switch>
      </Router>
    );
  }
}

export default App;
