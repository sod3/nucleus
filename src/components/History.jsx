import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./DeviceHistory.css";

const data = [
  { day: "M", power: 2, flow: 5, voltage: 20 },
  { day: "T", power: 3, flow: 7, voltage: 30 },
  { day: "W", power: 1, flow: 4, voltage: 10 },
  { day: "T", power: 4, flow: 8, voltage: 40 },
  { day: "F", power: 2.5, flow: 6, voltage: 25 },
  { day: "S", power: 10, flow: 7.5, voltage: 28 },
  { day: "S", power: 15, flow: 7.8, voltage: 30 },
];

const StackedBarChart = () => {
  const [filter, setFilter] = useState("week");

  const getFilteredData = (filter) => {
    switch (filter) {
      case "today":
        return [data[data.length - 1]]; 
      case "week":
        return data;
      case "month":
        return data; 
      default:
        return data;
    }
  };

  const filteredData = getFilteredData(filter);

  return (
    <div className="device-history">
      <h2>History</h2>
      <h3>Device A</h3>

      {/* Filter Dropdown */}
      <div className="filter-dropdown">
        <label className="filters">Filter Data: </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
      </div>

      <div className="chart">
        <p>{filter.charAt(0).toUpperCase() + filter.slice(1)} Overview</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={filteredData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="power" stackId="a" name="Power Consumption" fill="#02d8e9" />
            <Bar dataKey="flow" stackId="a" fill="#f97316" name="Flow Rate" />
            <Bar dataKey="voltage" stackId="a" fill="#1677c5" name="Voltage" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StackedBarChart;
