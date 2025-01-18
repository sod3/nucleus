import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddDevice.css";

function AddNewDevice({ onAddDevice }) {
  const [deviceName, setDeviceName] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (deviceName.trim() === "") {
      setError("Device name cannot be empty.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Retrieve the JWT token from localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("User is not authenticated. Please log in.");
      }

      // Send the POST request to the backend
      const response = await fetch("https://2a60-203-215-166-38.ngrok-free.app/sensors", { // Replace with your actual endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Include the JWT token in the Authorization header
        },
        body: JSON.stringify({ name: deviceName.trim() }), // Send only the name field
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add device.");
      }

      const data = await response.json();

      // Assuming the backend returns the created device object
      onAddDevice(data);

      // Reset the form
      setDeviceName("");

      // Navigate back to the dashboard or device list
      navigate("/"); // Replace with your actual route
    } catch (error) {
      console.error("Error adding device:", error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
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
          disabled={isSubmitting}
        />

        {error && <p className="error-message">{error}</p>} {/* Display error message */}

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Device"}
        </button>
      </form>
    </div>
  );
}

export default AddNewDevice;
