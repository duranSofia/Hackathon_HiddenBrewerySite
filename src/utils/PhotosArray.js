import React from "react";
import Bar1 from "../media/bars_pictures/bar_1.jpg";
import Bar2 from "../media/bars_pictures/bar_2.jpg";
import Bar3 from "../media/bars_pictures/bar_3.jpeg";
import Bar4 from "../media/bars_pictures/bar_4.jpg";

const imagesArray = [Bar1, Bar2, Bar3, Bar4];

export default function PhotosArray() {
  return (
    <div>
      {imagesArray.map((image, i) => (
        <img className="photo-test" alt={i} src={image} />
      ))}
    </div>
  );
}
