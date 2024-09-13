import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/LoginImg.jpg";

/* work on the buttons */

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password == comfirmPassword) {
      try {
        const response = await axios.post("http://127.0.0.1:5000/register", {
          email,
          password,
        });
        setMessage("");
        if (response.data.success) {
          navigate("/login");
        } else {
          setMessage("Invalid username!");
        }
      } catch (error) {
        console.log("error");
      }
    } else {
      setMessage("Invalid password!");
    }
  };
  return (
    <div className="register">
      <div className="register__section">
        <div className="register__box">
          <div className="register__header">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              Sign up
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="register__form">
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
            <input
              type="password"
              value={comfirmPassword}
              onChange={(e) => setComfirmPassword(e.target.value)}
              placeholder="Confirmed!"
            />
          </form>
          <div className="btns">
            {message && (
              <span className="btn text-red-400 flex justify-center">
                {message}
              </span>
            )}
            <div className="btn">
                <button className="login__btn" onClick={(e) => handleSubmit(e)}>
                Login
                </button>
                <button className="register__btn" onClick={() => navigate("/register")}>Sign up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="login__image">
        <img src={LoginImg} alt="image" />
      </div>
    </div>
  );
}

export default RegisterForm;
