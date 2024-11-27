import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Nov_26/Home";
import AboutUs from "./components/Nov_26/AboutUs";
import ContactUs from "./components/Nov_26/ContactUs";
import Login from "./components/Nov_26/Login";
import './App.css'

function App() {
 
  return (
    <div className="App">
     <Router>
       <nav>
         <ul>
           <li>
             <NavLink to="/">Home</NavLink>
           </li>
           <li>
             <NavLink to="/about">About</NavLink>
           </li>
           <li>
             <NavLink to="/contact">Contact</NavLink>
           </li>
         </ul>
       </nav>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<AboutUs />} />
         <Route path="/contact" element={<ContactUs />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
