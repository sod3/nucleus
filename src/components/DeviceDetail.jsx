import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaBolt, FaTachometerAlt, FaWater } from "react-icons/fa";
import "./DeviceDetail.css";

function DeviceDetail() {
  const { deviceId } = useParams(); // Get the device ID from the URL
  const navigate = useNavigate();

  // Mock data for the selected device (replace with API data)
  const deviceData = {
    id: deviceId,
    name: `Device ${deviceId}`,
    status: "Active",
    power: "220KW",
    flowRate: "50L/min",
    voltage: "240V",
    history: [
      { month: "Jan", power: "200KW" },
      { month: "Feb", power: "180KW" },
      { month: "Mar", power: "220KW" },
    ],
  };

  return (
    <div className="device-detail">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back
      </button>

      <div className="device-header">
        <h2>{deviceData.name}</h2>
        <span className={`status ${deviceData.status.toLowerCase()}`}>
          {deviceData.status}
        </span>
      </div>

      <div className="device-stats">
        <div className="stat-card">
          <FaBolt className="stat-icon" />
          <span className="stat-value">{deviceData.power}</span>
          <span className="stat-label">Power</span>
        </div>
        <div className="stat-card">
          <FaWater className="stat-icon" />
          <span className="stat-value">{deviceData.flowRate}</span>
          <span className="stat-label">Flow Rate</span>
        </div>
        <div className="stat-card">
          <FaTachometerAlt className="stat-icon" />
          <span className="stat-value">{deviceData.voltage}</span>
          <span className="stat-label">Voltage</span>
        </div>
      </div>
    </div>
  );
}

export default DeviceDetail;
