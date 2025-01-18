import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddDevice.css";

function AddNewDevice({ onAddDevice }) {
  const [deviceName, setDeviceName] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [status, setStatus] = useState("active");

  const navigate = useNavigate();

  const getIcon = (type) => {
    switch (type) {
      case "Electrical":
        return "🔌";
      case "Mechanical":
        return "⚙️";
      case "Plumbing":
        return "🚿";
      default:
        return "📱";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDevice = {
      id: Math.random().toString(36).substr(2, 9),
      name: deviceName,
      icon: getIcon(deviceType),
      active: status === "active",
    };

    onAddDevice(newDevice);

    setDeviceName("");
    setDeviceType("");
    setStatus("active");

    navigate("/");
  };

  return (
    <div className="add-new-device">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back
      </button>
      <h2 className="form-title">Add New Device</h2>
      <form onSubmit={handleSubmit} className="device-form">
        <label htmlFor="deviceName">Device Name</label>
        <input
          type="text"
          id="deviceName"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
          placeholder="Enter device name"
          required
        />

        <button type="submit" className="submit-button">
          Add Device
        </button>
      </form>
    </div>
  );
}

export default AddNewDevice;