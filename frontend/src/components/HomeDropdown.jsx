import React from "react";

function HomeDropdown({ title, name, handleSelect }) {
  return (
    <li className="home__dropdown">
      <a href="" className="home__btn">
        {title}
      </a>
      <div className="dropdown-content">
        <button  value="l1" name={name} onClick={handleSelect}>
          l1
        </button>
        <button  value="l2" name={name} onClick={handleSelect}>
          l2
        </button>
        <button  value="l3" name={name} onClick={handleSelect}>
          l3
        </button>
      </div>
    </li>
  );
}

export default HomeDropdown;
