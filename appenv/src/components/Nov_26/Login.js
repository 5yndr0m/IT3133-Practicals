import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import "../../assets/Nov_26/styless.css";
import users from "../../assets/Nov_26/data.js";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const user = users.find(
      (user) =>
        user.email === credentials.email && user.password === credentials.password
    );

    if (user) {
      setErrorMessage(""); 
      navigate("/home"); 
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <div className="login-container">
        <label className="login-label">
          Email:
          <input
            type="email"
            name="email" 
            value={credentials.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="input-style"
          />
        </label>
        <label className="login-label">
          Password:
          <input
            type="password"
            name="password" 
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className="input-style"
          />
        </label>
        <button
          onClick={handleLogin}
          className="login-btn"
        >
          Login
        </button>
        {errorMessage && (
          <p className="err-msg">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}
