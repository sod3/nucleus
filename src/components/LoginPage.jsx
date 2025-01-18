import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState(""); // Changed from 'email' to 'username'
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // Create a FormData object and append the credentials
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
  
      // Send the credentials as FormData to the backend
      const response = await fetch(`https://2a60-203-215-166-38.ngrok-free.app/login`, {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.detail) {
        // Handle invalid credentials error
        alert(`Login failed: ${data.detail}`);
      } else if (data.token) {
        // Store the token in localStorage
        localStorage.setItem("token", data.token);
        alert("Login successful!");
  
        // Redirect to the dashboard or another protected route
        navigate("/dashboard"); // Replace with your actual protected route
      } else {
        throw new Error("Unexpected response from backend");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert(`Login failed: ${error.message}`);
    }
  };
  
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome Back!</h1>
        <p>Please log in to continue</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label> {/* Updated label */}
            <input
              type="text" // Correct input type
              id="username"
              placeholder="Enter your username"
              value={username} // Updated state variable
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
        <p className="signup-prompt">
          Don't have an account? <Link to="/signup">Sign Up</Link> {/* Changed to Link component */}
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
