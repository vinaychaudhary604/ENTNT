// src/components/ClientList/ClientRow.js

import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';
import './../../styles/ClientRow.css'; // Import your ClientRow styles

const ClientRow = ({ client, handleEdit, renderAppointments, handleAddAppointment, handleDeleteClient }) => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const handleToggleAppointmentForm = () => {
    setShowAppointmentForm(!showAppointmentForm);
  };

  return (
    <div className="client-row">
      <div className="client-info">
        <div>
          <label>First Name:</label>
          <input type="text" value={client.firstName} onChange={(e) => handleEdit(client.id, 'firstName', e.target.value)} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={client.lastName} onChange={(e) => handleEdit(client.id, 'lastName', e.target.value)} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={client.location} onChange={(e) => handleEdit(client.id, 'location', e.target.value)} />
        </div>
      </div>
      
      <div className="appointments">
        <label>Appointments:</label>
        {renderAppointments(client.appointments)}
        {/* <button onClick={() => handleAddAppointment(client.id)}>Add Appointment</button> */}
      </div>
      
      <button onClick={() => handleDeleteClient(client.id)}>Delete Client</button>

      {/* Display the AppointmentForm conditionally */}
      <button onClick={handleToggleAppointmentForm}>Toggle Appointment Form</button>
      {showAppointmentForm && <AppointmentForm onSubmit={(appointment) => handleAddAppointment(client.id,client.firstName, appointment)} />}
    </div>
  );
};

export default ClientRow;
