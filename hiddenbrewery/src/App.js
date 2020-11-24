import "./App.css";
import FakeHome from "./Pages/FakeHome";
// import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import Home from "./Pages/Home";

function App() {
  // REMEMBER TO change it to false when we show the last version
  const [loggedIn, setLoggedIn] = useState(false);

  const { listen } = useSpeechRecognition({
    onResult: (result) => {
      console.log(result);
      if (result.includes("vodka")) {
        setLoggedIn(true);
      }
    },
  });

  console.log(loggedIn);
  return (
    <>
      <Router>
        {loggedIn && <Redirect to="/access-allowed" />}

        {/* <Header /> */}
        {/* <div style={{ position: "relative", left: "47%", top: "17px" }}>
          <button
            style={{
              zIndex: 9999,
              position: "fixed",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              height: "25px",
              width: "60px",
            }}
            onClick={() => {
              listen();
            }}
          >
            help?
          </button>
        </div> */}
        <Switch>
          <Route path="/" component={FakeHome} exact />
          <Route path="/access-allowed" exact>
            <Home isLoggedIn={loggedIn} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
