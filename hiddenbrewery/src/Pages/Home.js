import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./home.css";
import BarResults from "../components/BarResults";
import Categories from "../components/Categories";
import MyMapComponent from "../components/Map";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],

      loading: true,
      userCoordinates: null,
    };
  }
  updateCoordinates(newCoord) {
    console.log("new", newCoord);
    this.setState({ userCoordinates: newCoord });
  }

  componentDidMount() {
    fetch("https://api.openbrewerydb.org/breweries?by_city=new_york")
      .then((resp) => resp.json())
      .then((places) => this.setState({ data: places }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <div className="Home">
        <div className="main-container">
          <Header />

          <div>
            <Categories
              onUpdateCoordinates={(newCoord) =>
                this.updateCoordinates(newCoord)
              }
            />
            {this.state.loading ? (
              "loading ADD from material ui... "
            ) : (
              // <BarResults bars={this.state?.data} />
              <MyMapComponent
                isMarkerShown
                places={this.state.data}
                userCoordinates={this.state.userCoordinates}
              />
            )}

            <div className="footer-container">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
