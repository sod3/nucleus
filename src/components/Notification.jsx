import React from "react";
import "./Notification.css";

function Notification() {
  const notifications = [
    { id: 1, title: "SALE IS LIVE", time: "1m ago", description: "Lorem ipsum dolor sit amet." },
    { id: 2, title: "Maintenance Alert", time: "10 hrs ago", description: "Check your device." },
  ];

  return (
    <div className="notification">
      <h2>Notification</h2>
      {notifications.map((notif) => (
        <div key={notif.id} className="notification-item">
          <h3>{notif.title}</h3>
          <p>{notif.description}</p>
          <span>{notif.time}</span>
        </div>
      ))}
    </div>
  );
}

export default Notification;
