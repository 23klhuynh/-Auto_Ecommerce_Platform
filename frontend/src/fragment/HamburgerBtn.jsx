import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

function HamburgerBtn({toggleMenu, isClicked}) {
  return (
    <button className="navbar__mobile" onClick={toggleMenu}>
      {isClicked ? <RxCross1 /> : <GiHamburgerMenu />}
    </button>
  );
}

export default HamburgerBtn;
