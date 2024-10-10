import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Navbar({ isScrolled }) {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <header>
      <nav
        className={`navbar ${isScrolled ? "" : "nav-default"} ${
          isClicked ? "click" : ""
        }`}
      >
        <div className={`navbar__container ${
          isClicked ? "click" : ""
        }`}>
          <div className="navbar__margin">
            <button
              className="navbar__mobile"
              onClick={() => setIsClicked(!isClicked)}
            >
              {isClicked ? <RxCross1 /> : <GiHamburgerMenu />}
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

            <button className="navbar__btn" onClick={() => navigate("/login")}>
              Logout
            </button>
          </div>
          {isClicked && (
            <ul>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
