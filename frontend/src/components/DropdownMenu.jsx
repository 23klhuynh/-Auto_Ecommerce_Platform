import React from "react";
import NavbarMenu from "./NavbarMenu";

function DropdownMenu({isClicked}) {
  return (
    <ul className={`navbar__mobile-dropdown ${isClicked ? "open" : "close"}`}>
      <NavbarMenu />
    </ul>
  );
}

export default DropdownMenu;
