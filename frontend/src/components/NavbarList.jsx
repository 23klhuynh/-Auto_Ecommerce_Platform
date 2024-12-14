import React from "react";
import NavbarMenu from "./NavbarMenu";

function NavbarList() {
  return (
    <ul className={`navbar__items`}>
      <NavbarMenu className="navbar__item" />
    </ul>
  );
}

export default NavbarList;
