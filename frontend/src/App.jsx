
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/register" element={<RegisterForm />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
