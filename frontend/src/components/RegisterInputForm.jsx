import React from "react";

function RegisterInputForm({handleSubmit, email ,setEmail, password ,setPassword, comfirmPassword ,setComfirmPassword}) {
  return (
    <form onSubmit={handleSubmit} className="register__form">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email!"
      />
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password!"
      />
      <input
        type="password"
        required
        value={comfirmPassword}
        onChange={(e) => setComfirmPassword(e.target.value)}
        placeholder="Confirmed!"
      />
    </form>
  );
}

export default RegisterInputForm;
