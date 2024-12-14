import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/LoginImg.jpg";
import RegisterInputForm from "./RegisterInputForm";
import RegisterBtn from "./RegisterBtn";
import Header from "../fragment/Header";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  localStorage.removeItem("authToken");

  const handleLogin = () => {
    navigate("/login")
  }

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
    <main className="register">
      <section className="register__section">
        <Header text="Sign Up"/>
        <div className="register__box">
          <RegisterInputForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            comfirmPassword={comfirmPassword}
            setComfirmPassword={setComfirmPassword}
          />
          <RegisterBtn handleLogin={handleLogin} handleSubmit={handleSubmit} message={message}/>
        </div>
      </section>
      <section className="login__image">
        <img src={LoginImg} alt="image" />
      </section>
    </main>
  );
}

export default RegisterForm;
