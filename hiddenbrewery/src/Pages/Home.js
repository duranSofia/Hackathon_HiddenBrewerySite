import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div>Search categories</div>
          <div className="menu-selector">
            <div>input 1 </div>
            <div>input 2 </div>
          </div>
        </div>
        <div className="map">Map</div>
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
      </div>
    );
  }
}

