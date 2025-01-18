import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-section">
        <h1>Sahulaat</h1>
        <p>Making Every Step Easier - Sahulaat</p>
      </div>
      <nav>
        <Link to="/" className="sidebar-item">
          <span className="icon">📱</span>
          <span>Your Devices</span>
        </Link>
        <Link to="/add-device" className="sidebar-item">
          <span className="icon">➕</span>
          <span>Add New Device</span>
        </Link>
        <Link to="/history" className="sidebar-item">
          <span className="icon">🔔</span>
          <span>History</span>
        </Link>
        <Link to="/notifications" className="sidebar-item">
          <span className="icon">🔔</span>
          <span>Notification</span>
        </Link>
        <Link to="/signout" className="sidebar-item">
          <span className="icon">🚪</span>
          <span>Sign Out</span>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
