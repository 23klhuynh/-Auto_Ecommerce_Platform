import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img from "../assets/LoginImg.jpg"

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const authentication = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/dashboard", {
          withCredentials: true,
        });
      } catch (error) {
        console.log("error");
        if (error.response && error.response.status === 401) {
          navigate("/login");
        }
      }
    };
    authentication();
  }, [navigate]);
  return (
    <main className="home_container">
      <section className="home-page">
        <ul className="home__search-bar">
          <li>
            <select name="maker" id="" className="home__dropdown">
              <option value="" disabled selected>
                Select Maker
              </option>
              <option value="hello">hello</option>
            </select>
          </li>
          <li>
            <select name="model" id="" className="home__dropdown">
              <option value="" disabled selected>
                Select Model
              </option>
              <option value="hello">hello</option>
            </select>
          </li>
          <li>
            <select name="year" id="" className="home__dropdown">
              <option value="" disabled selected>
                Select Year
              </option>
              <option value="hello">hello</option>
            </select>
          </li>
          <li>
            <select name="price" id="" className="home__dropdown">
              <option value="" disabled selected>
                Select Price
              </option>
              <option value="hello">hello</option>
            </select>
          </li>
          <li>
            <select name="condition" id="" className="home__dropdown">
              <option value="" disabled selected>
                Select Condition
              </option>
              <option value="hello">hello</option>
            </select>
          </li>
          <li>
            <select name="type" id="" className="home__dropdown">
              <option value="" disabled selected>
                Select Type
              </option>
              <option value="hello">hello</option>
            </select>
          </li>
        </ul>
      </section>
      <section className="content">
        <div className="content__main">
          <h2>Your mobility, your choice</h2>
          
            <ul className="content__lists">
              <li className="content__list">
                <img src={img} alt="" />
                <p>kjdvbwjv</p>
              </li>
              <li className="content__list">
                <img src={img} alt="" />
                <p>kjdvbwjv</p>
              </li>
              <li className="content__list">
                <img src={img} alt="" />
                <p>kjdvbwjv</p>
              </li>
              <li className="content__list">
                <img src={img} alt="" />
                <p>kjdvbwjv</p>
              </li>
              <li className="content__list">
                <img src={img} alt="" />
                <p>kjdvbwjv</p>
              </li>
            </ul>
        </div>
      </section>
    </main>
  );
}

export default Home;
