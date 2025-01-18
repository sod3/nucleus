import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Notification from "./components/Notification";
import DeviceHistory from "./components/DeviceHistory";
import "./App.css";
import YourDevices from "./components/YourDevices";
import DeviceDetail from "./components/DeviceDetail";
import AddNewDevice from "./components/AddDevice";
import { FaLightbulb, FaPlug, FaThermometerHalf, FaWifi } from "react-icons/fa";
import SignOut from "./components/SignOut";
import LoginPage from "./components/LoginPage";
import Signup from "./components/SignUppage";
import CreatePattern from "./components/CreatePattern";

function App() {
  const [devices, setDevices] = useState([
    { id: 1, name: "Device 1", icon: <FaWifi />, active: true },
    { id: 2, name: "Device 2", icon: <FaPlug />, active: false },
    { id: 3, name: "Device 3", icon: <FaThermometerHalf />, active: true },
    { id: 4, name: "Device 4", icon: <FaLightbulb />, active: false },
  ]);

  const handleAddDevice = (newDevice) => {
    setDevices((prevDevices) => [...prevDevices, newDevice]);
  };
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
             <Route path="/" element={<YourDevices devices={devices} />}/>
            <Route path="/device/:deviceId" element={<DeviceDetail />} />
            <Route path="/history" element={<DeviceHistory />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add-device" element={<AddNewDevice onAddDevice={handleAddDevice} />}/>
            <Route path="/notifications" element={<Notification />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/" element={<Notification />} />
            <Route path="/create-pattern" element={<CreatePattern />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
