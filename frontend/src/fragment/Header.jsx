import React from "react";

function Header({text="Login"}) {
  return (
    <div className="login__header">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{text}</h1>
    </div>
  );
}

export default Header;
