import React, { Component } from "react";
import "./home.css";
import USStates from "../components/Info/States&Cities.json";
import Footer from "../components/Footer";
import BarResults from "../components/BarResults";
import Geocode from "react-geocode";
import GoogleKey from "../key";
import "../components/FilterCategories.css";
import { Redirect } from "react-router-dom";
import RealHeader from "../components/RealHeader";
import BarHome from "../media/homeIMG.png";

Geocode.setApiKey(GoogleKey);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      USInfo: USStates,
      states: [],
      cities: [],
      selectedState: "--Choose State--",
      selectedCity: "--Choose City--",
      breweries: [],
      coordinatesLat: 0,
      coordinatesLng: 0,
      userCoordinates: null,
    };
    this.changeState = this.changeState.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.updateCoordinates = this.updateCoordinates.bind(this);
  }

  updateCoordinates(newCoord) {
    console.log("new", newCoord);
    this.setState({ userCoordinates: newCoord });
  }

  getGeocode(place) {
    Geocode.fromAddress(place).then(
      (response) => {
        this.updateCoordinates(response.results[0].geometry.location);
        console.log("geocode", response.results[0].geometry.location);
      },
      (error) => {
        console.log("oops", error);
      }
    );
  }

  changeState(event) {
    this.setState({ selectedState: event.target.value }, () => {
      console.log("selectedState", this.state.selectedState);
      this.fetchState(this.state.selectedState);
    });
    this.setState({ states: Object.keys(this.state.USInfo) }, () => {
      console.log("states", this.state.states);
    });
    this.getGeocode(event.target.value);
  }

  changeCity(event) {
    this.setState({ selectedCity: event.target.value }, () => {
      console.log("selectedCity", this.state.selectedCity);
      this.fetchCity(this.state.selectedCity);
    });
    this.setState(
      { cities: this.state.USInfo[this.state.selectedState] },
      () => {
        console.log("cities", this.state.cities);
      }
    );
    this.getGeocode(event.target.value);
  }

  fetchState(state) {
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}`)
      .then((resp) => resp.json())
      .then((data) => this.setState({ breweries: data }));
  }

  fetchCity(city) {
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then((resp) => resp.json())
      .then((data) => this.setState({ breweries: data }));
  }
  render() {
    const { isLoggedIn } = this.props;
    return isLoggedIn ? (
      <div className="Home">
        <div className="main-container">
          <RealHeader />
          <div>
            <div className="filters-container">
              <div>
                <label>State</label>

                <select
                  placeholder="state"
                  value={this.state.selectedState}
                  onChange={this.changeState}
                >
                  <option>--Choose State--</option>
                  {Object.keys(this.state.USInfo).map((state, index) => {
                    return <option key={index}>{state}</option>;
                  })}
                </select>
              </div>
              <div>
                <label>City</label>
                <select
                  placeholder="city"
                  value={this.state.selectedCity}
                  onChange={this.changeCity}
                >
                  <option>--Choose City--</option>
                  {this.state.selectedState !== "--Choose State--" &&
                    this.state.USInfo[this.state.selectedState].map(
                      (city, index) => {
                        return <option key={index}>{city}</option>;
                      }
                    )}
                </select>
              </div>
            </div>

            <div className="map-view">
              <BarResults
                userCoordinates={this.state?.userCoordinates}
                bars={this.state?.breweries}
              />
            </div>
          </div>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}
