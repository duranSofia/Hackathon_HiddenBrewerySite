import React, { Component } from "react";
import MyMapComponent from "../components/Map";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./home.css";
import BarResults from "../components/BarResults";
import SearchFilters from "../components/SearchFilters";

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
            <SearchFilters />
          </div>
          {this.state.loading ? (
            "loading ADD from material ui... "
          ) : (
            <BarResults bars={this.state?.data} />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}
