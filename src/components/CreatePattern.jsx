import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePattern.css"; // Optional CSS for styling

function CreatePattern() {
  const [patternName, setPatternName] = useState("");
  const navigate = useNavigate();

  const handleCreate = () => {
    // Here you can add logic to handle the pattern creation
    // For example, you might save the pattern name or call an API
    alert(`New pattern "${patternName}" created successfully!`);
    navigate("/notifications"); // Redirect back to the main page (or any other page you prefer)
  };

  const handleBack = () => {
    navigate("/notifications"); // Navigate back to the previous page (main notification page)
  };

  return (
    <div className="create-pattern">
      <h2>Create a New Pattern</h2>
      <div className="input-group">
        <label htmlFor="patternName">Pattern Name</label>
        <input
          type="text"
          id="patternName"
          placeholder="Enter pattern name"
          value={patternName}
          onChange={(e) => setPatternName(e.target.value)}
          required
        />
      </div>
      <div className="button-group">
        <button className="confirm-button" onClick={handleCreate}>
          OK
        </button>
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default CreatePattern;
