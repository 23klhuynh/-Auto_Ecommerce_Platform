
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/login" element={<LoginForm />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
