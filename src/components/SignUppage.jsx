import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [username, setUsername] = useState(""); // Changed from 'name' to 'username'
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Send the credentials as JSON to the backend
      const response = await fetch("https://2a60-203-215-166-38.ngrok-free.app/users", { // Updated endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), // Use 'username' instead of 'name'
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server Error:", errorData); // Log the entire error response
        throw new Error(errorData.message || "Signup failed");
      }

      const data = await response.json();
      console.log("Signup successful:", data);
      alert("Signup successful! Please log in.");
      // Optionally, redirect to the login page
    } catch (error) {
      console.error("Error during signup:", error);
      alert(`Signup failed: ${error.message}`);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>Create an Account</h1>
        <p>Join Sahulaat and make every step easier!</p>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="username">Username</label> {/* Updated label */}
            <input
              type="text"
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
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        <p className="login-prompt">
          Already have an account? <Link to="/LoginPage">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
