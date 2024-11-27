import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Nov_26/Home";
import AboutUs from "./components/Nov_26/AboutUs";
import ContactUs from "./components/Nov_26/ContactUs";
import Login from "./components/Nov_26/Login";
import './App.css';
import './assets/Nov_26/styless.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navStyles">
          <ul className="navUl">
            <li>
              <NavLink to="/" className={({ isActive }) => `inactive-link ${isActive ? 'active-link' : ''}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `inactive-link ${isActive ? 'active-link' : ''}`}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `inactive-link ${isActive ? 'active-link' : ''}`}>
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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
