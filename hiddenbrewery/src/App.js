import "./App.css";
import FakeHome from './Pages/FakeHome';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Router>
      <Switch>
        <Route path='/' component={FakeHome} exact />
        <Route path='/redirect' component={Home} exact />
      </Switch>
         </Router>

      <div className="main-container">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
