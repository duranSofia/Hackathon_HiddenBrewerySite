import React, { Component } from "react";
import MyMapComponent from "../components/Map";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
    };
  }
  componentDidMount() {
    fetch("https://api.openbrewerydb.org/breweries?by_city=new_york")
      .then((resp) => resp.json())
      .then((places) => this.setState({ data: places, loaded: true }));
  }
  render() {
    console.log("fetch", this.state.data);
    return (
      <div className="Home">
        <Header />
        <div className="main-container">
          <div>Search categories</div>
          <div className="menu-selector">
            <div>input 1 </div>
            <div>input 2 </div>
          </div>
        </div>
        <div>
          {this.state.loaded && (
            <MyMapComponent isMarkerShown places={this.state.data} />
          )}
        </div>
        <h2>list of cards</h2>
        <div className="cards-section">
          <div className="card">
            <div className="image-card"></div>
            <div>
              <h3>Bar Name</h3>
              <p>
                Open Brewery DB is a free dataset and API with public
                information on breweries, cideries, brewpubs, and bottleshops.
                The goal of Open Brewery DB is to maintain an open-source,
                community-driven dataset and provide a public API. It is our
              </p>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="image-card"></div>
            <div>
              <h3>Bar Name</h3>
              <p>
                Open Brewery DB is a free dataset and API with public
                information on breweries, cideries, brewpubs, and bottleshops.
                The goal of Open Brewery DB is to maintain an open-source,
                community-driven dataset and provide a public API. It is our
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
