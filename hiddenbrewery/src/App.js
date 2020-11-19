
import logo from './logo.svg';
import React from "react";
import './App.css';
import MyMapComponent from "./components/Map";
import FakeHome from './Pages/FakeHome';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      loaded: false
    }
  }

  componentDidMount(){
    fetch("https://api.openbrewerydb.org/breweries?by_city=new_york")
    .then(resp => resp.json())
    .then((places) => this.setState({data: places, loaded: true}));
      }
  render() {
    console.log("fetch", this.state.data);
    return (
       <div>
         {this.state.loaded && <MyMapComponent isMarkerShown places={this.state.data} />}
       </div>
    )
  }
}


/*
function App() {
  return (
    <div className="App">

      <header className="App-header">
        <p>Hackathon Project</p>
         <MyMapComponent isMarkerShown  />
      </header>

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
*/
export default App;
