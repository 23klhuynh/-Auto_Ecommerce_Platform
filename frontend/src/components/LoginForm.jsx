import React, { useState } from "react";
import axios from "axios";
import LoginImg from "../assets/LoginImg.jpg";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        email,
        password,
      });
      if (response.data.success) {
        console.log("success");
      } else {
        console.log("fail");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="login__section"> 
        <div className="login__box">
          <div className="login__header">
            <h1 className="">Hello,</h1>
            <h2 className="">Welcome!</h2>
          </div>
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
          </form>
          <div className="btns">
            <button className="login__btn" onClick={(e) => handleSubmit(e)}>
              Login
            </button>
            <button className="register__btn" onClick={() => navigate("/register")}>Sign up</button>
          </div>
        </div>
      </div>
      <div className="login__image">
        <img src={LoginImg} alt="image" />
      </div>
    </div>
  );
}

export default LoginForm;
