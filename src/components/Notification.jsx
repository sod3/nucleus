import React from "react";
import "./Notification.css";

function Notification() {
  const notifications = [
    {
      id: 1,
      title: "SALE IS LIVE",
      time: "1m ago",
      description: "Lorem ipsum dolor sit amet.",
      name: "John Doe",
      profilePic: "/profile.jpg",
    },
    {
      id: 2,
      title: "Maintenance Alert",
      time: "10 hrs ago",
      description: "Check your device.",
      name: "Jane Smith",
      profilePic: "/profile.jpg",
    },
  ];

  return (
    <div className="notification">
      <h2>Notifications</h2>
      {notifications.map((notif) => (
        <div key={notif.id} className="notification-item">
          <img src={notif.profilePic} alt={`${notif.name} profile`} className="profile-pic" />
          <div className="notification-content">
            <div className="notification-header">
              <h3>{notif.title}</h3>
              <span className="time">{notif.time}</span>
            </div>
            <p>{notif.description}</p>
            <span className="name">From: {notif.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notification;
