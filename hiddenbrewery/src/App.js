import React from "react";
import "./App.css";
import FakeHome from "./Pages/FakeHome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={FakeHome} exact />
            <Route path="/redirect" component={Home} exact />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
