import React from "react";
import BarCard from "./BarCard";

import Bar1 from "../media/bars_pictures/bar_1.jpg";
import Bar2 from "../media/bars_pictures/bar_2.jpg";
import Bar3 from "../media/bars_pictures/bar_3.jpeg";
import Bar4 from "../media/bars_pictures/bar_4.jpg";

const imagesArray = [Bar1, Bar2, Bar3, Bar4];

export default function BarsList(props) {
  return (
    <div>
      <div className="cards-section">
        {props.barsData?.map((bar, i) => (
          <BarCard
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
