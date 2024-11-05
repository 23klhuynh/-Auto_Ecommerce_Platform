import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import useScroll from "./components/useScroll";
import Footer from "./components/Footer";

function App() {
  const isScrolled = useScroll();
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route
            exact
            path="/home"
            element={
              <PrivateRoute>
                <>
                  <Navbar isScrolled={isScrolled} />
                  <Home />
                  <Footer />
                </>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
