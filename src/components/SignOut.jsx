import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignOut.css";

function SignOut() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Remove the token from localStorage to sign the user out
    localStorage.removeItem("token"); // Removes the stored token

    // Perform any additional sign-out logic (e.g., clearing user session or calling an API)
    alert("Signed Out Successfully!");

    // Redirect to the login page after sign-out
    navigate("/loginPage"); // Redirect to login page
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="signout-container">
      <h2>Sign Out</h2>
      <p>Are you sure you want to sign out?</p>
      <div className="button-group">
        <button className="signout-button" onClick={openModal}>
          Sign Out
        </button>
        <button className="cancel-button" onClick={closeModal}>
          Cancel
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <h3 id="modal-title">Confirm Sign Out</h3>
            <p>Do you really want to sign out?</p>
            <div className="modal-button-group">
              <button className="confirm-button" onClick={handleSignOut}>
                Yes, Sign Out
              </button>
              <button className="modal-cancel-button" onClick={closeModal}>
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignOut;
