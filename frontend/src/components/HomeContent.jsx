import React from "react";
import cars from "../data/cars.json";

function HomeContent() {
  return (
    <section className="content">
      <div className="content__main">
        <h2>Your mobility, your choice</h2>
        <ul className="content__lists">
          {cars?.cars?.map(({ make, model, picture }) => (
            <li className="content__list" key={make}>
              <img src={picture} alt={`${make} ${model}`} />
              <p>
                {make} {model}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HomeContent;
