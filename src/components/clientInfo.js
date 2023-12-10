import React from "react";
import "./styles.css";

const ClientInfo = ({
  id,
  firstName,
  lastName,
  location,
  addAppointment,
  isEditing,
}) => {
  return (
    <div className="client-info-container">
      <div className="field">
        <label htmlFor={`firstName${id}`}>First Name:</label>
        <span id={`firstName${id}`} className="info-text">
          {firstName}
        </span>
      </div>
      <div className="field">
        <label htmlFor={`lastName${id}`}>Last Name:</label>
        <span id={`lastName${id}`} className="info-text">
          {lastName}
        </span>
      </div>
      <div className="field">
        <label htmlFor={`location${id}`}>Location:</label>
        <span id={`location${id}`} className="info-text">
          {location}
        </span>
      </div>
    </div>
  );
};

export default ClientInfo;
