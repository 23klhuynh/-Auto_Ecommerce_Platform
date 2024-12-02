import React from 'react'
import HomeDropdown from "../components/HomeDropdown";


function SearchBar({carSelection, handleSelect}) {
  return (
    <section className="home-page">
        <ul className="home__search-bar">
          {Object.keys(carSelection).map((key) => (
            <HomeDropdown
            key={key}
            title={carSelection[key]}
            name={key}  
            handleSelect={handleSelect}
            />
          ))}
          <li className="home__dropdown home__submit-btn">
            <button className="submit-btn">
              submit
            </button>
          </li>
        </ul>
      </section>
  )
}

export default SearchBar