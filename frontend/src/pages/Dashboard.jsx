import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Dashboard() {
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
    <div>Dashboard</div>
  )
}

export default Dashboard