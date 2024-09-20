import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route
            exact
            path="/dashboard"
            element={
              <PrivateRoute>
                <>
                  <Navbar />
                  <Dashboard />
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
