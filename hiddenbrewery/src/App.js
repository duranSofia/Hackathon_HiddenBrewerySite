import "./App.css";
import FakeHome from "./Pages/FakeHome";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { useState } from "react";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

function App() {
  // REMEMBER TO change it to false when we show the last version
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(loggedIn);
  return (
    <>
      <Router>
        {loggedIn && <Redirect to="/access-allowed" />}

        {!loggedIn && <Header setLoggedIn={setLoggedIn} />}

        <Switch>
          <Route path="/" component={FakeHome} exact />

          <Route path="/breweries/:id" component={Details} exact />

          <Route path="/access-allowed" exact>
            <Home isLoggedIn={loggedIn} />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
