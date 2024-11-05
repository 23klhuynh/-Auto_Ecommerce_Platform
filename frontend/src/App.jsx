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
import Contact from "./pages/Contact";

function App() {
  const isScrolled = useScroll();

  const renderPrivateRoute = (Component) => (
    <PrivateRoute>
      <Navbar isScrolled={isScrolled} />
      <Component />
      <Footer />
    </PrivateRoute>
  );

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={renderPrivateRoute(Home)} />
          <Route
            path="/dashboard/contact"
            element={renderPrivateRoute(Contact)}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
