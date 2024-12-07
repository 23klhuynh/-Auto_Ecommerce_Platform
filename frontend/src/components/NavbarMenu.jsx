import React from "react";
import NavbarLinks from "../fragment/NavbarLinks";
import { Link } from "react-router-dom";

function NavbarMenu({className}) {
  return (
    <>
      {NavbarLinks.map(({ link }, index) => (
        <li key={index} className={className}>
          <Link to={link === "home" ? "/dashboard" : `/dashboard/${link}`}>
            {link.toUpperCase()}
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavbarMenu;
