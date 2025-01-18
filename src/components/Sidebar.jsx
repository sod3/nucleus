import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaPlus, FaHistory, FaBell, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-section">
        <img src="/logo.png" alt="Sahulaat Logo" />
      </div>
      <nav>
        <NavLink
          exact
          to="/"
          className="sidebar-item"
          activeClassName="active"
        >
          <FaHome className="icon" />
          <span>Your Devices</span>
        </NavLink>
        <NavLink
          to="/add-device"
          className="sidebar-item"
          activeClassName="active"
        >
          <FaPlus className="icon" />
          <span>Add Device</span>
        </NavLink>
        <NavLink
          to="/history"
          className="sidebar-item"
          activeClassName="active"
        >
          <FaHistory className="icon" />
          <span>History</span>
        </NavLink>
        <NavLink
          to="/notifications"
          className="sidebar-item"
          activeClassName="active"
        >
          <FaBell className="icon" />
          <span>Notifications</span>
        </NavLink>
        <NavLink
          to="/signup"
          className="sidebar-item"
          activeClassName="active"
        >
          <FaSignInAlt className="icon" />
          <span>Sign Up</span>
        </NavLink>
        <NavLink
          to="/signout"
          className="sidebar-item"
          activeClassName="active"
        >
          <FaSignOutAlt className="icon" />
          <span>Sign Out</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;

