import React from "react";
import PriceData from "./PriceData";
import OnScreen from "./OnScreen";

function PriceDisplay() {
  const priceComponent = PriceData.map((price) => (
    <OnScreen key={price.level} details={price} />
  ));

  return <div className="price-content">{priceComponent}</div>;
}

export default PriceDisplay;
