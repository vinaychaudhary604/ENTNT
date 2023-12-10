import React, { useState, useEffect } from "react";
import "./styles.css";

const Appointments = ({
  appointments,
  addAppointment,
  onEdit,
  deleteAppointment,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [editedAppointments, setEditedAppointments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setEditedAppointments([...appointments]);
  }, [appointments]);

  const handleEdit = () => {
    setEditing(true);
    setError("");
  };

  const handleSave = () => {
    if (validateAppointments()) {
      onEdit(editedAppointments);
      setEditing(false);
    }
  };

  const validateAppointments = () => {
    const isValid = editedAppointments.every(
      (appointment) =>
        appointment.firstName.trim() !== "" &&
        appointment.lastName.trim() !== "" &&
        appointment.location.trim() !== "" &&
        appointment.dateTime.trim() !== ""
    );

    if (!isValid) {
      setError("All fields are required. Please fill them in.");
    } else {
      setError("");
    }

    return isValid;
  };

  const handleAddAppointment = () => {
    if (validateAppointments()) {
      const newAppointment = {
        firstName: "",
        lastName: "",
        location: "",
        dateTime: "",
      };
      setEditedAppointments([...editedAppointments, newAppointment]);
    }
  };

  const handleDeleteAppointment = (index) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (shouldDelete) {
      const updatedAppointments = [...editedAppointments];
      updatedAppointments.splice(index, 1);
      setEditedAppointments(updatedAppointments);
    }
  };

  const handleAppointmentChange = (index, field, value) => {
    const updatedAppointments = [...editedAppointments];
    updatedAppointments[index][field] = value;
    setEditedAppointments(updatedAppointments);
    setError("");
  };

  return (
    <div className="field appointments-field">
      <label>Appointments:</label>
      <div className="appointment">
        {editedAppointments.map((appointment, index) => (
          <div key={index} className="appointment-item">
            <input
              type="text"
              placeholder="First Name"
              value={appointment.firstName}
              onChange={(e) =>
                handleAppointmentChange(index, "firstName", e.target.value)
              }
              disabled={!isEditing}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={appointment.lastName}
              onChange={(e) =>
                handleAppointmentChange(index, "lastName", e.target.value)
              }
              disabled={!isEditing}
            />
            <input
              type="text"
              placeholder="Location"
              value={appointment.location}
              onChange={(e) =>
                handleAppointmentChange(index, "location", e.target.value)
              }
              disabled={!isEditing}
            />
            <input
              type="datetime-local"
              placeholder="Date and Time"
              value={appointment.dateTime}
              onChange={(e) =>
                handleAppointmentChange(index, "dateTime", e.target.value)
              }
              disabled={!isEditing}
            />
            {isEditing && (
              <>
                <button onClick={() => handleDeleteAppointment(index)}>
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      {isEditing && (
        <>
          <button onClick={handleAddAppointment}>Add Appointment</button>
          <button onClick={handleSave}>Save</button>
        </>
      )}
      {!isEditing && (
        <button onClick={handleEdit}>Edit / Add Appointments</button>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Appointments;
