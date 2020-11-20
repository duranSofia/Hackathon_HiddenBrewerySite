import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import "./home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // loading: true,
    };
  }
  // componentDidMount() {
  //   fetch("https://api.openbrewerydb.org/breweries?by_city=new_york")
  //     .then((resp) => resp.json())
  //     .then((places) => this.setState({ data: places }))
  //     .finally(() => this.setState({ loading: false }));
  // }
  render() {
    return (
      <div className="Home">
        <div className="main-container">
          <Header />
          <Categories />
          {/* {this.state.loading ? (
            "loading ADD from material ui... "
          ) : (
            <BarResults bars={this.state?.data} />
          )}
        </div> */}
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
