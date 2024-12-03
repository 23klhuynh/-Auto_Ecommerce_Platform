import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import HomeContent from "../components/HomeContent";
import HomeAbout from "../components/HomeAbout";
import CarOverview from "../components/CarOverview";

function Home() {
  const [carSelection, setCarSelection] = useState({
    make: "Make",
    model: "Model",
    year: "Year",
    bodyType: "Body style",
    engineType: "Engine type",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const authentication = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/dashboard", {
          withCredentials: true,
        });
      } catch (error) {
        console.log("error");
        if (error.response?.status === 401) navigate("/login");
      }
    };
    authentication();
  }, [navigate]);

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setCarSelection((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="home-container">
      <SearchBar carSelection={carSelection} handleSelect={handleSelect} />
      <HomeContent />
      <HomeAbout />
      <CarOverview />
    </main>
  );
}

export default Home;
