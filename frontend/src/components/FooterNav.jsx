import React from "react";
import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";

function FooterNav() {
  return (
    <nav className="footer__section">
      {FooterLinks.map(({ title, links }, index) => (
        <ul key={index} className="footer__items">
          <h1>{title}</h1>
          {links.map((link, idx) => (
            <li className="footer__item" key={idx}>
              <Link
                to={
                  link === "Home"
                    ? "/dashboard"
                    : `/dashboard/${link.toLowerCase()}`
                }
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
}

export default FooterNav;
