// YourDevices.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlug } from "react-icons/fa"; // Import FaPlug icon
import "./YourDevices.css";

function YourDevices() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        // Retrieve the JWT token from localStorage
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("User is not authenticated. Please log in.");
        }
        console.log("Token:", token);
        // Send the GET request to the backend to fetch devices
          const response = await fetch(`https://c974-203-215-166-38.ngrok-free.app/sensors`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

        // if (!response.ok) {
        //   const contentType = response.headers.get("content-type");
        //   if (contentType && contentType.includes("application/json")) {
        //     const errorData = await response.json();
        //     throw new Error(errorData.message || "Failed to fetch devices.");
        //   } else {
        //     // If response is not JSON, log the response text for debugging
        //     const errorText = await response.text();
        //     throw new Error(
        //       `Failed to fetch devices. Server responded with: ${errorText}`
        //     );
        //   }
        // }

        const data = await response.json();

        // Assuming the backend returns an array of devices
        setDevices(Array.isArray(data) ? data : [data]);
      } catch (err) {
        console.error("Error fetching devices:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchDevices();
  }, []);
  // Function to handle navigation to device detail page
  const handleDeviceClick = (deviceId) => {
    navigate(`/device/${deviceId}`);
  };

  if (loading) {
    return (
      <div className="your-devices">
        <h2 className="section-title">Your Devices</h2>
        <p>Loading devices...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="your-devices">
        <h2 className="section-title">Your Devices</h2>
        <p className="error-message">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="your-devices">
      <h2 className="section-title">Your Devices</h2>
      {devices.length === 0 ? (
        <p>You have no devices. Add one!</p>
      ) : (
        <div className="devices-grid">
          {devices.map((device) => (
            <div
              key={device.id}
              className={`device-card ${device.active ? "active" : "inactive"}`}
              onClick={() => handleDeviceClick(device.id)}
            >
              <div className="device-icon">
                <FaPlug size={40} color="#007bff" /> {/* Assign FaPlug icon */}
              </div>
              <span className="device-name">{device.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default YourDevices;
