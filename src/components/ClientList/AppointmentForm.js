// src/components/ClientList/AppointmentForm.js

import React, { useState } from 'react';
import './../../styles/AppointmentForm.css'; // Import your AppointmentForm styles

const AppointmentForm = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields (add more validation if needed)
    if (!date || !time) {
      alert('Please fill in both date and time.');
      return;
    }

    // Submit the appointment details to the parent component
    onSubmit({ date, time });

    // Clear the form fields
    setDate('');
    setTime('');
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <label>Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <label>Time:</label>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />

      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AppointmentForm;
