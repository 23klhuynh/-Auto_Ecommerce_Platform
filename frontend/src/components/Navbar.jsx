import React, { useState } from "react";
import NavbarMenu from "./NavbarMenu";
import SubmitButton from "../fragment/SubmitButton";
import HamburgerBtn from "../fragment/HamburgerBtn";
import DropdownMenu from "./DropdownMenu";
import NavbarList from "./NavbarList";
import { useNavigate } from "react-router-dom";

function Navbar({ isScrolled }) {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  // need to clean up this code

  return (
    <nav className={`navbar ${isScrolled ? "" : "nav-default"}`}>
      <div className={`navbar__container`}>
        <div className="navbar__margin">
          <HamburgerBtn toggleMenu={handleClick} isClicked={isClicked} />
          <DropdownMenu isClicked={isClicked} />
          <NavbarList />
          <SubmitButton
            className="navbar__btn"
            onClick={() => navigate("/login")}
            text="Logout"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
