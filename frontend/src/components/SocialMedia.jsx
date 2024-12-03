import React from "react";
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <div className="contact__social">
      <Link to="/dashboard">
        <FaFacebook />
      </Link>
      <Link to="/dashboard">
        <FaTwitter />
      </Link>
      <Link to="/dashboard">
        <FaInstagramSquare />
      </Link>
    </div>
  );
}

export default SocialMedia;
