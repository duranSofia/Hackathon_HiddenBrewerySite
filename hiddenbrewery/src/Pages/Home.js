import React, { Component } from "react";
import MyMapComponent from "../components/Map";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./home.css";
import BarsList from "../components/BarsList";
import BarResults from "../components/BarResults";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    fetch("https://api.openbrewerydb.org/breweries?by_city=new_york")
      .then((resp) => resp.json())
      .then((places) => this.setState({ data: places }))
      .finally(() => this.setState({ loading: false }));
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
          {this.state.loading ? (
            "loading from material ui... "
          ) : (
            <BarResults bars={this.state?.data} />
          )}
        </div>
        <div>
          {/* TODO this can be moved to results, the compoennt akes care of showing results in both map and list */}
          {/* {!this.state.loading && (
            <MyMapComponent isMarkerShown places={this.state.data} />
          )} */}
        </div>

        <Footer />
      </div>
    );
  }
}
