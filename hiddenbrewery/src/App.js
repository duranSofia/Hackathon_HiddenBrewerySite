import logo from './logo.svg';
import React from "react";
import './App.css';
import MyMapComponent from "./components/Map";


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
    </div>
  );
}
*/
export default App;
