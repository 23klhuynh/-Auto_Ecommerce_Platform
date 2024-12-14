import React from "react";

function RegisterBtn({ handleLogin, handleSubmit, message }) {
  return (
    <div className="register__btns">
      <div className="register__footer">
        <p className="register__recommend text-xs sm:text-xs md:text-sm lg:text-md xl:text-xl">
          Already a Member?{" "}
          <button className="text-blue-700" onClick={handleLogin}>
            Sign In
          </button>
        </p>

        <button className="register__btn" onClick={(e) => handleSubmit(e)}>
          Sign up
        </button>
        {message && <span className="btn text-red-400">{message}</span>}
      </div>
    </div>
  );
}

export default RegisterBtn;
