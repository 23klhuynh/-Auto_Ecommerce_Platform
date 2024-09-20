import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__margin">
          <button className="navbar__mobile">
            <GiHamburgerMenu />
          </button>
          <ul className="navbar__items">
            <li className="navbar__item">
              <Link to="/dashboard">HOME</Link>
            </li>
            <li className="navbar__item">
              <Link to="/dashboard/shop">SHOP</Link>
            </li>
            <li className="navbar__item">
              <Link to="/dashboard/finder">FINDER</Link>
            </li>
            <li className="navbar__item">
              <Link to="/dashboard/contact">CONTACT</Link>
            </li>
          </ul>

          <button className="navbar__btn">Logout</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
