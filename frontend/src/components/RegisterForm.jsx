import React, {useState} from 'react'
import axios from "axios"
import LoginImg from "../assets/LoginImg.jpg"


function RegisterForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://127.0.0.1:5000/register", {email, password});

            if (response.data.success){
                print("success: no same email")
            }else{
                print("fail, the email is already exist")
            }
        }catch(error){
            print("error")
        }
    }
  return (
    <div className="register">
        <div className="register__section"> {/* flex = 1 */}
            <div className="register__box">
                <div className="register__header">
                    <h1 className="">Hello,</h1>
                    <h2 className="">Welcome!</h2>
                </div>
                <form onSubmit={handleSubmit} className="register__form"> {/* flex=2 */}
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder=" Email!"/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder=" Password!"/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder=" Confirmed!"/>
                </form>
                <div className="btns">
                    <button className="login__btn bg-blue-950" onClick={(e)=>handleSubmit(e)}>Sign up</button>
                    
                </div>
            </div>
        </div>
        <div className="login__image">
            <img src={LoginImg} alt="" />
        </div>
    </div>
  )
}

export default RegisterForm