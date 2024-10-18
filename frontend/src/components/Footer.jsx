import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__section">
        <ul className="footer__items">
          <h1>Navigation</h1>
          <li className="footer__item">
            <Link>Home</Link>
          </li>
          <li className="footer__item">
            <Link>Shop</Link>
          </li>
          <li className="footer__item">
            <Link>Finder</Link>
          </li>
          <li className="footer__item">
            <Link>Contact</Link>
          </li>
        </ul>
        <ul className="footer__items">
          <h1>About Us</h1>
          <li className="footer__item">
            <Link>Company Information</Link>
          </li>
          <li className="footer__item">
            <Link>Blogs</Link>
          </li>
          <li className="footer__item">
            <Link>News</Link>
          </li>
          <li className="footer__item">
            <Link>FAQ</Link>
          </li>
        </ul>
        <ul className="footer__items">
          <h1>Social Media</h1>
          <li className="footer__item">
            <Link>Twitter</Link>
          </li>
          <li className="footer__item">
            <Link>Instagram</Link>
          </li>
          <li className="footer__item">
            <Link>Facebook</Link>
          </li>
          <li className="footer__item">
            <Link>Youtube</Link>
          </li>
          <li className="footer__item">
            <Link>Tik-Tok</Link>
          </li>
        </ul>
      </div>
      <div className="footer__policy">
        <h1 className="footer__policy-info"><span>&copy; 2024 AutoMart. All rights reserved.</span><Link>Terms & Conditions</Link></h1>
      </div>
    </section>
  );
}

export default Footer;
