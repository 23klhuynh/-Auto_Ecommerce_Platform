import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img from "../assets/LoginImg.jpg"
import carBrand from "../data/CarBrand.json"
import cars from "../data/cars.json"

function Home() {

  const [make, setMake] = useState("Maker");
  const [model, setModel] = useState("Model");
  const [year, setYear] = useState("Year");
  const [bodyType, setBodyType] = useState("Body-Type");
  const [engType, setEngType] = useState("Engine-Type");

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
            <a href="" className="home__btn">{make}</a>
            <div className="dropdown-content">
              <button href="#" onClick={() => setMake("l1")}>l1</button>
              <button href="#" onClick={() => setMake("l2")}>l2</button>
              <button href="#" onClick={() => setMake("l3")}>l3</button>
            </div>
          </li>
          <li className="home__dropdown">
            <a href="" className="home__btn">{model}</a>
            <div className="dropdown-content">
              <button href="#" onClick={() => setModel("l1")}>l1</button>
              <button href="#" onClick={() => setModel("l2")}>l2</button>
              <button href="#" onClick={() => setModel("l3")}>l3</button>
            </div>
          </li>
          <li className="home__dropdown">
            <a href="" className="home__btn">{year}</a>
            <div className="dropdown-content">
              <button href="#" onClick={() => setYear("l1")}>l1</button>
              <button href="#" onClick={() => setYear("l2")}>l2</button>
              <button href="#" onClick={() => setYear("l3")}>l3</button>
            </div>
          </li>
          <li className="home__dropdown">
            <a href="" className="home__btn">{bodyType}</a>
            <div className="dropdown-content">
              <button href="#" onClick={() => setBodyType("l1")}>l1</button>
              <button href="#" onClick={() => setBodyType("l2")}>l2</button>
              <button href="#" onClick={() => setBodyType("l3")}>l3</button>
            </div>
          </li>
          <li className="home__dropdown">
            <a href="" className="home__btn">{engType}</a>
            <div className="dropdown-content">
              <button href="#" onClick={() => setEngType("l1")}>l1</button>
              <button href="#" onClick={() => setEngType("l2")}>l2</button>
              <button href="#" onClick={() => setEngType("l3")}>l3</button>
            </div>
          </li>
          <li className="home__dropdown home__btn">
            <button href="" className="home__submit-btn">submit</button>
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
