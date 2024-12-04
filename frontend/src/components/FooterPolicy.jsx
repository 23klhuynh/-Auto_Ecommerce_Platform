import React from "react";
import { Link } from "react-router-dom";

function FooterPolicy() {
  return (
    <section className="footer__policy">
      <h1 className="footer__policy-info">
        <span>&copy; 2024 AutoMart. All rights reserved.</span>
        <Link>Terms & Conditions</Link>
      </h1>
    </section>
  );
}

export default FooterPolicy;
