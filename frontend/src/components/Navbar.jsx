import React, { useState } from "react";
import NavbarMenu from "./NavbarMenu";
import SubmitButton from "../fragment/SubmitButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Navbar({ isScrolled }) {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  // need to clean up this code 

  return (
    <header>
      <nav className={`navbar ${isScrolled ? "" : "nav-default"}`}>
        <div className={`navbar__container`}>
          <div className="navbar__margin">
            <button className="navbar__mobile" onClick={handleClick}>
              {isClicked ? <RxCross1 /> : <GiHamburgerMenu />}
            </button>
            {/* mobile dropdown */}
            <ul
              className={`navbar__mobile-dropdown ${
                isClicked ? "open" : "close"
              }`}
            >
              <NavbarMenu />
            </ul>

            <ul className={`navbar__items`}>
              <NavbarMenu className="navbar__item" />
            </ul>

            <SubmitButton
              className="navbar__btn"
              onClick={() => navigate("/login")}
              text="Logout"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
