import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaBolt, FaTachometerAlt, FaWater } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./DeviceDetail.css";

function DeviceDetail() {
  const { deviceId } = useParams(); // Get the device ID from the URL
  const navigate = useNavigate();

  // State to manage selected metric
  const [selectedMetric, setSelectedMetric] = useState("power");

  // Mock data for the selected device (replace with API data)
  const deviceData = {
    id: deviceId,
    name: `Device ${deviceId}`,
    status: "Active",
    power: "220KW",
    flowRate: "50L/min",
    voltage: "240V",
    history: [
      { month: "Jan", power: 200, flowRate: 45, voltage: 230 },
      { month: "Feb", power: 180, flowRate: 50, voltage: 235 },
      { month: "Mar", power: 220, flowRate: 55, voltage: 240 },
      { month: "Apr", power: 210, flowRate: 48, voltage: 238 },
      { month: "May", power: 230, flowRate: 52, voltage: 242 },
      { month: "Jun", power: 250, flowRate: 60, voltage: 245 },
    ],
  };

  // Handler to change the selected metric
  const handleMetricChange = (metric) => {
    setSelectedMetric(metric);
  };

  // Determine the data and label based on selected metric
  const chartData = deviceData.history.map((item) => ({
    month: item.month,
    value:
      selectedMetric === "power"
        ? item.power
        : selectedMetric === "flowRate"
        ? item.flowRate
        : item.voltage,
  }));

  const chartLabel =
    selectedMetric === "power"
      ? "Power (KW)"
      : selectedMetric === "flowRate"
      ? "Flow Rate (L/min)"
      : "Voltage (V)";

  const chartColor =
    selectedMetric === "power"
      ? "#00bfff"
      : selectedMetric === "flowRate"
      ? "#32cd32"
      : "#ff8c00";

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

      {/* Metric Selection Menu */}
      <div className="metric-menu">
        <button
          className={`metric-button ${
            selectedMetric === "power" ? "active" : ""
          }`}
          onClick={() => handleMetricChange("power")}
        >
          Power
        </button>
        <button
          className={`metric-button ${
            selectedMetric === "flowRate" ? "active" : ""
          }`}
          onClick={() => handleMetricChange("flowRate")}
        >
          Flow Rate
        </button>
        <button
          className={`metric-button ${
            selectedMetric === "voltage" ? "active" : ""
          }`}
          onClick={() => handleMetricChange("voltage")}
        >
          Voltage
        </button>
      </div>

      {/* Chart Section */}
      <div className="chart-container">
        <h3>{chartLabel} Over Months</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis
              label={{
                value: chartLabel,
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle" },
              }}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke={chartColor}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DeviceDetail;
