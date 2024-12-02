import React from "react";
import carBrand from "../data/CarBrand.json";

function CarOverview() {
  return (
    <section className="car">
      <div className="car__heading">
        <h1>Popular Car Brand</h1>
      </div>
      <ul className="car__brands">
        {carBrand.popular_car_brands.map((brand, index) => (
          <li key={index} className="car__brand">
            <img src={brand} alt="" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CarOverview;
