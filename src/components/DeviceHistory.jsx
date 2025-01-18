import React from "react";
import "./DeviceHistory.css";

function DeviceHistory() {
  return (
    <div className="device-history">
      <h2>History</h2>
      <h3>Device A</h3>
      <div className="chart">
        <p>Weekly Overview</p>
        {/* Add a chart library like Chart.js for actual visualizations */}
        <div className="dummy-chart">[Insert Chart Here]</div>
      </div>
    </div>
  );
}

export default DeviceHistory;
