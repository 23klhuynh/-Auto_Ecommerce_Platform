import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
    const navigate = useNavigate();
    useEffect(()=>{
        const authentication = async () =>{
            try{
                const response = await axios.get("http://127.0.0.1:5000/dashboard", { withCredentials: true,})
            }catch(error){
                console.log("error")
                if (error.response && error.response.status === 401){
                    navigate("/login")
                }
            }
        };
        authentication();
    }, [navigate])
  return (
    <main className="home_container">
        <section className="home-page">
            <div className="home__search-bar">
                <ul>
                    <li>
                        Maker
                    </li>
                    <li>
                        Model
                    </li>
                    <li>
                        Year
                    </li>
                    <li>
                        Type
                    </li>
                </ul>
            </div>
        </section>
    </main>
  )
}

export default Home;