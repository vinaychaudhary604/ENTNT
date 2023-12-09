// src/components/Calendar/Calendar.js

import React from 'react';
import './../../styles/Calendar.css'; // Import your Calendar styles

const Calendar = ({ appointments, setShowCalender }) => {
  return (
    <div className="calendar">
      <div  className="client-list-head">
        <h2 className='green' onClick={()=>setShowCalender(false)}>Show Client List</h2>
        <h2>Calendar List</h2>
      </div>
      {appointments.length === 0 ? (
        <p>No appointments scheduled.</p>
      ) : (
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              {`${appointment.date} at ${appointment.time} - Client: ${appointment.clientName}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Calendar;
