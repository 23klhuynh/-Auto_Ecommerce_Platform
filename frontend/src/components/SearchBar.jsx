import React from 'react'
import HomeDropdown from "../components/HomeDropdown";
import SubmitButton from '../fragment/SubmitButton';

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
          <SubmitButton className="home__dropdown home__submit-btn" text="Submit"/>
        </ul>
      </section>
  )
}

export default SearchBar