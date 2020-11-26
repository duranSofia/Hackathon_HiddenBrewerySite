import React from "react";
import BarCard from "./BarCard";

import Bar1 from "../media/bars_pictures/bar_1.jpg";
import Bar2 from "../media/bars_pictures/bar_2.jpg";
import Bar3 from "../media/bars_pictures/bar_3.jpeg";
import Bar4 from "../media/bars_pictures/bar_4.jpg";

import BarHome from "../media/prost.jpg";

const imagesArray = [Bar1, Bar2, Bar3, Bar4];

export default function BarsList(props) {
  return (
    <div>
      <div className="cards-section">
        {props.barsData.length <= 0 && (
          <div className="img-container">
            <img src={BarHome} alt="home-page" />
            <div class="centered">
              Select your city and come join us for a drink!
            </div>
          </div>
        )}

        {props.barsData?.map((bar, i) => (
          <BarCard
            key={i}
            image={imagesArray[i % imagesArray.length]}
            name={bar.name}
            street={bar.street}
            website={bar.website_url}
          />
        ))}
      </div>
    </div>
  );
}
