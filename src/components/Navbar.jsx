// Navbar.js
import React, { useState } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  // Sample username for demonstration; replace with dynamic username logic
  const [username] = useState("John Doe");

  const handleSignOut = () => {
    // Handle sign out logic here (e.g., clear user session, redirect to login)
    console.log("User signed out");
  };

  return (
    <div className="navbar">
      <div className="navbar-profile">
        <FaUserCircle className="profile-icon" />
        <span className="profile-name">{username}</span> {/* Display username */}
        <FaSignOutAlt className="signout-icon" onClick={handleSignOut} />
      </div>
    </div>
  );
}

export default Navbar;