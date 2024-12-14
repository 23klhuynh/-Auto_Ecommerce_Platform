import React, { useState } from "react";
import axios from "axios";
import LoginImg from "../assets/LoginImg.jpg";
import LoginInputForm from "./LoginInputForm";
import Header from "../fragment/Header";
import LoginButton from "../fragment/LoginButton";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        email,
        password,
      });
      if (response.data.success) {
        console.log("success");
        navigate("/dashboard");
        localStorage.setItem("authToken", "some-token-here");
      } else {
        console.log("fail");
        setMessage("Username Invalid!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignUp = () => navigate("/register");
  localStorage.removeItem("authToken");

  return (
    <div className="login">
      <div className="login__section">
        <Header/>
        <div className="login__box">
          <LoginInputForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
            handleSignUp={handleSignUp}
          />
          <LoginButton message={message}/>
        </div>
      </div>
      <div className="login__image">
        <img src={LoginImg} alt="image" />
      </div>
    </div>
  );
}

export default LoginForm;
