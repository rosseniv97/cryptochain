import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";

import HomeView from "./views/Home";
import CarView from "./views/Car";
import CarsList from "./views/CarsList";
import UserCarsView from "./views/UserCars";

class App extends Component {
  render() {
    return (
      <Router>
        <LastLocationProvider>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/viewcar" component={CarView} />
            <Route path="/view-taken-cars" component={UserCarsView} />
          </Switch>
        </LastLocationProvider>
      </Router>
    );
  }
}

export default App;
