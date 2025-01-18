import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState(""); // Renamed from 'email' to 'username'
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);

      // Send the form data to the backend
      const response = await fetch("https://2a60-203-215-166-38.ngrok-free.app/login", { // Updated endpoint
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server Error:", errorData); // Detailed error logging
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Assuming the backend sends a token in the response
      const { token } = data;

      if (token) {
        // Store the token in localStorage (consider security implications)
        localStorage.setItem("token", token);
        alert("Login successful!");

        // Redirect to the dashboard or another protected route
        navigate("/dashboard"); // Replace with your actual protected route
      } else {
        throw new Error("Token not found in the response.");
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
              type="text" // Changed type from 'username' to 'text'
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


