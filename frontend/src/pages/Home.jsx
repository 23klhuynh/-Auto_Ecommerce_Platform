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
                Maker
              </option>
              <option value="hello">hello</option>
            </select>
          </li>
          <li>
            <select name="model" id="" className="home__dropdown">
              <option value="" disabled selected>
                Model
              </option>
              <option value="hello">hello</option>
            </select>
          </li>
          <li>
            <select name="year" id="" className="home__dropdown">
              <option value="" disabled selected>
                Year
              </option>
              <option value="hello">hello</option>
            </select>
          </li>
          <li>
            <select name="price" id="" className="home__dropdown">
              <option value="" disabled selected>
                Price
              </option>
              <option value="hello">hello</option>
            </select>
          </li>
          <li>
            <select name="condition" id="" className="home__dropdown">
              <option value="" disabled selected>
                Condition
              </option>
              <option value="hello">hello</option>
            </select>
          </li>
          <li>
            <select name="type" id="" className="home__dropdown">
              <option value="" disabled selected>
                Type
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

      <section className="about">
        <div className="about__info">
          <h3>about us</h3>
          <h1>Welcome to AutoMark</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi vero est sunt ullam fugiat, temporibus velit sapiente culpa ipsam ducimus, consectetur fugit, eius quos? Laborum molestias numquam ullam quo totam?</p>
          

        </div>
        <div  className="about__img">
        </div>

      </section>


      {/* <section className="card">


      </section> */}
    </main>
  );
}

export default Home;
