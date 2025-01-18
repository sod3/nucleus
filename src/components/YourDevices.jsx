import React from "react";
import { useNavigate } from "react-router-dom";
import "./YourDevices.css";

function YourDevices({ devices }) {
  const navigate = useNavigate();

  return (
    <div className="your-devices">
      <h2 className="section-title">Your Devices</h2>
      <div className="devices-grid">
        {devices.map((device) => (
          <div
            key={device.id}
            className={`device-card ${device.active ? "active" : "inactive"}`}
            onClick={() => navigate(`/device/${device.id}`)}
          >
            <div className="device-icon">{device.icon}</div>
            <span className="device-name">{device.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourDevices;
