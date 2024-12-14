import React from "react";

function LoginButton({message}) {
  return (
    <div className="login__btns">
      {message && <span className="btn text-red-400">{message}</span>}
    </div>
  );
}

export default LoginButton;
