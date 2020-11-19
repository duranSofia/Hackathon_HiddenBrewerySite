import React from "react";
import BarCard from "./BarCard";

export default function BarsList(props) {
  return (
    <div>
      <h2>list of bars {props.bars?.length}</h2>
      <div className="cards-section">
        <BarCard />
      </div>
    </div>
  );
}
