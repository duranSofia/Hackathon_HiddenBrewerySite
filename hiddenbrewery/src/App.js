import "./App.css";
import Categories from './components/Categories'
import FakeHome from "./Pages/FakeHome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <>   <Categories />
      <Router>
        <Switch>
          <Route path="/" component={FakeHome} exact />
        </Switch>
      </Router>
      </>
    );
  }
}
