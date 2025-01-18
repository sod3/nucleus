// src/components/Layout.jsx
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Layout.css";

function Layout({ children, user, onSignOut }) {
  return (
    <div className="layout">
      {/* Sidebar Integration */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="main-content">
        {/* Navbar Integration */}
        <Navbar user={user} onSignOut={onSignOut} />

        {/* Page-Specific Content */}
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
