import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const users = [
  { email: "test@example.com", password: "12345" },
  { email: "user1@example.com", password: "password1" },
  { email: "admin@example.com", password: "admin123" },
];

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
      [name]: value, // Dynamically update either email or password
    }));
  };

  const handleLogin = () => {
    const user = users.find(
      (user) =>
        user.email === credentials.email && user.password === credentials.password
    );

    if (user) {
      setErrorMessage(""); 
      navigate("/"); 
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <div style={{ maxWidth: "300px", margin: "auto" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Email:
          <input
            type="email"
            name="email" // Match key in credentials object
            value={credentials.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            style={{ display: "block", width: "100%", marginTop: "5px" }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Password:
          <input
            type="password"
            name="password" // Match key in credentials object
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            style={{ display: "block", width: "100%", marginTop: "5px" }}
          />
        </label>
        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Login
        </button>
        {errorMessage && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
        )}
      </div>
    </div>
  );
}
