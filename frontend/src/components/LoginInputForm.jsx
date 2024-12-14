import React from "react";

function LoginInputForm({email, password, setEmail, setPassword, handleSubmit, handleSignUp }) {
  return (
    <form onSubmit={handleSubmit} className="login__form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email!"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password!"
      />
      <div className="login__footer">
        <button className="login__btn" onClick={(e) => handleSubmit(e)}>
          Login
        </button>
        <button className="register__btn" onClick={handleSignUp}>
          Sign up
        </button>
      </div>
    </form>
  );
}

export default LoginInputForm;
