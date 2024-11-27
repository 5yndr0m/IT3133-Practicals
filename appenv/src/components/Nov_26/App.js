import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "./components/Nov_26/Home";
import AboutUs from "./components/Nov_26/AboutUs";
import ContactUs from "./components/Nov_26/ContactUs";
import Login from "./components/Nov_26/Login";
import './App.css';
import './assets/Nov_26/styless.css';

function App() {
  return (
    <Router>  
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

function Navigation() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && (
        <nav className="navStyles">
          <ul className="navUl">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => `inactive-link ${isActive ? 'active-link' : ''}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `inactive-link ${isActive ? 'active-link' : ''}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `inactive-link ${isActive ? 'active-link' : ''}`}
              >
                Contact
              </NavLink>
            </li>
            <li style={{ marginLeft: "auto" }}>
              <NavLink to="/login" className={({ isActive }) => `button-link ${isActive ? 'active-button' : ''}`}>
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default App;
