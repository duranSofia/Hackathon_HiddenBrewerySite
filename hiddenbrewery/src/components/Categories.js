import React from "react";
import USStates from "./Info/States&Cities.json";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      USInfo: USStates,
      states: [],
      cities: [],
      selectedState: "--Choose State--",
      selectedCity: "--Choose City--",
      stateBreweries: [],
      cityBreweries: [],
    };
    this.changeState = this.changeState.bind(this);
    this.changeCity = this.changeCity.bind(this);
  }

  changeState(event) {
    this.setState({ selectedState: event.target.value }, () => {
      console.log("selectedState", this.state.selectedState);
      this.fetchState(this.state.selectedState);
    });
    this.setState({ states: Object.keys(this.state.USInfo) }, () => {
      console.log("states", this.state.states);
    });
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
  }

  fetchState(state) {
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}`)
      .then((resp) => resp.json())
      .then((data) => this.setState({ stateBreweries: data }));
  }

  fetchCity(city) {
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then((resp) => resp.json())
      .then((data) => this.setState({ stateBreweries: data }));
  }

  render() {
    return (
      <div>
        <label>State</label>
        <br />
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
        <br />
        <div>
          <label>City</label>
          <br />
          <select
            placeholder="city"
            value={this.state.selectedCity}
            onChange={this.changeCity}
          >
            <option>--Choose State--</option>
            {this.state.selectedState !== "--Choose State--" &&
              this.state.USInfo[this.state.selectedState].map((city, index) => {
                return <option key={index}>{city}</option>;
              })}
          </select>
          <ul>
            {this.state.stateBreweries.map((brewery) => {
              return <li>{brewery.name}</li>;
            })}
          </ul>
          <ul>
            {this.state.cityBreweries.map((brewery) => {
              return <li>{brewery.id}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Categories;
