import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Notification.css";

function Notification() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

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
    {
      id: 3, // New notification
      title: "Unusual Reading Detected",
      time: "30 seconds ago",
      description: "There has been an unusual reading detected in your device. Please review the options below.",
      name: "Admin",
      profilePic: 'https://t3.ftcdn.net/jpg/01/93/90/82/360_F_193908219_ak4aB1PzlhizUVGLOVowzHICc3tl6WeX.jpg',
      buttons: [ 
        { label: "Add to Existing Pattern", action: () => alert("Added to existing pattern"), className : 'button' },
        { label: "Mark as Unusual", action: () => alert("Marked as unusual"),className : 'button'  },
        { label: "Create New Pattern", action: () => navigate("/create-pattern"),className : 'button'  }, // Navigate to the new page
      ],
    },
  ];

  const navigate = useNavigate();

  // Function to open the popup and set the selected notification
  const openPopup = (notification) => {
    setSelectedNotification(notification);
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedNotification(null);
  };

  return (
    <div className="notification">
      <h2>Notifications</h2>
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className="notification-item"
          onClick={() => openPopup(notif)} // Open popup on click
        >
          <img
            src={notif.profilePic}
            alt={`${notif.name} profile`}
            className="profile-pic"
          />
          <div className="notification-content">
            <div className="notification-header">
              <h3>{notif.title}</h3>
              <span className="time">{notif.time}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Popup for detailed view */}
      {isPopupOpen && selectedNotification && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>{selectedNotification.title}</h3>
            <p><strong>Time: </strong>{selectedNotification.time}</p>
            <p><strong>Description: </strong>{selectedNotification.description}</p>
            <p><strong>From: </strong>{selectedNotification.name}</p>
            <div className="popup-buttons">
              {selectedNotification.buttons && selectedNotification.buttons.map((button, index) => (
                <button
                  key={index}
                  className="popup-button"
                  onClick={button.action}
                >
                  {button.label}
                </button>
              ))}
            </div>
            <button className="close-popup" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
