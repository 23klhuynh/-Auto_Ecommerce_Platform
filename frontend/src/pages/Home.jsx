import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img from "../assets/LoginImg.jpg"
import carBrand from "../data/CarBrand.json"
import cars from "../data/cars.json"

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
          <li className="home__dropdown">
            <a href="" className="home__btn">Maker</a>
            <div className="dropdown-content">
              <a href="">l1</a>
              <a href="">l2</a>
              <a href="">l3</a>
            </div>
          </li>
          <li className="home__dropdown">
            <a href="" className="home__btn">Maker</a>
            <div className="dropdown-content">
              <a href="">l1</a>
              <a href="">l2</a>
              <a href="">l3</a>
            </div>
          </li>
          <li className="home__dropdown">
            <a href="" className="home__btn">Maker</a>
            <div className="dropdown-content">
              <a href="">l1</a>
              <a href="">l2</a>
              <a href="">l3</a>
            </div>
          </li>
          <li className="home__dropdown">
            <a href="" className="home__btn">Maker</a>
            <div className="dropdown-content">
              <a href="">l1</a>
              <a href="">l2</a>
              <a href="">l3</a>
            </div>
          </li>
          <li className="home__dropdown">
            <a href="" className="home__btn">Maker</a>
            <div className="dropdown-content">
              <a href="">l1</a>
              <a href="">l2</a>
              <a href="">l3</a>
            </div>
          </li>
          <li className="home__dropdown">
            <a href="" className="home__btn">Maker</a>
            <div className="dropdown-content">
              <a href="">l1</a>
              <a href="">l2</a>
              <a href="">l3</a>
            </div>
          </li>
        </ul>
      </section>


      <section className="content">
        <div className="content__main">
          <h2>Your mobility, your choice</h2>
          
            <ul className="content__lists">
              {cars.cars.map((item, index) => (
                <li className="content__list">
                <img src={item.picture} alt="" />
                <p>{item.make} {item.model}</p>
              </li>
              ))}

              
              {/* <li className="content__list">
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
              </li> */}
            </ul>
        </div>
      </section>

      <section className="about">
        <div className="about__info">
          <h1>about us</h1>
          <h1>Welcome to AutoMark</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi vero est sunt ullam fugiat, temporibus velit sapiente culpa ipsam ducimus, consectetur fugit, eius quos? Laborum molestias numquam ullam quo totam?</p>
        </div>
        <div  className="about__img">
        </div>

      </section>


      {/* <section className="card">


      </section> */}

      <section className="car">
        <div className="car__heading">
        <h1>Popular Car Brand</h1>
        </div>
        <ul className="car__brands">
          {carBrand.popular_car_brands.map((brand, index)=>(
            <li key={index} className="car__brand">
              <img src={brand} alt="" />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Home;
