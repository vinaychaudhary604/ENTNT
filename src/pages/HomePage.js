// src/pages/HomePage.js

import React, {useState} from 'react';
import ClientList from '../components/ClientList/ClientList';
import Calendar from '../components/Calendar/Calendar';
import './../styles/HomePage.css'; // Import your homepage styles
import useLocalStorage from './../hook/useLocalStorage';
const HomePage = () => {
  const [showCalender, setShowCalender] = useState(false);
  const [appointments, setAppointments] = useLocalStorage('fitness-trainer.appointments', []);

  return (
    <div className="home-page">
      <h1>Fitness Trainer Appointment App</h1>
      <div className="main-content">
        {!showCalender && (
        <ClientList className="client-list"
          appointments={appointments} 
          setAppointments={setAppointments} 
          setShowCalender={setShowCalender} />
        )}
        {showCalender && <Calendar className="client-list-calender"appointments={appointments} setShowCalender={setShowCalender} />}
      </div>
    </div>
  );
};

export default HomePage;
