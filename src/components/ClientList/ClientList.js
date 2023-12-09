// src/components/ClientList/ClientList.js

import React from 'react';
import ClientRow from './ClientRow';
import './../../styles/ClientList.css'; // Import your ClientList styles
import useLocalStorage from './../../hook/useLocalStorage';

const ClientList = ({ appointments, setAppointments, setShowCalender }) => {
  const [clients, setClients] = useLocalStorage('react-todo.tasks',[]);

  const handleEdit = (clientId, field, value) => {
    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === clientId ? { ...client, [field]: value } : client
      )
    );
  };

  const renderAppointments = (appointments) => {
    if (appointments.length === 0) {
      return <div>No appointments scheduled.</div>;
    }

    return (
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>{`${appointment.date} at ${appointment.time}`}</li>
        ))}
      </ul>
    );
  };

  const handleAddAppointment = (clientId,clientName, appointment) => {
    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === clientId
          ? { ...client, appointments: [...client.appointments, appointment] }
          : client
      )
    );
    setAppointments((prevAppointments) => [...prevAppointments, { id: Math.max(...prevAppointments.map((apt) => apt.id), 0) + 1, ...appointment, clientName:clientName }]);
  };

  const handleAddClient = () => {
    // Generate a unique ID for the new client
    const newClientId = Math.max(...clients.map((client) => client.id), 0) + 1;

    // Add a new client with default values
    const newClient = { id: newClientId, firstName: '', lastName: '', location: '', appointments: [] };

    setClients((prevClients) => [...prevClients, newClient]);
  };

  const handleDeleteClient = (clientId) => {
    setClients((prevClients) => prevClients.filter((client) => client.id !== clientId));
  };

  return (
    <div className="client-list">
      <div  className="client-list-head">
        <h2>Client List</h2>
        <h2 className='green' onClick={()=>setShowCalender(true)}>Show Calendar List</h2>
      </div>
      {clients.map((client) => (
        <ClientRow
          key={client.id}
          client={client}
          handleEdit={handleEdit}
          renderAppointments={renderAppointments}
          handleAddAppointment={handleAddAppointment}
          handleDeleteClient={handleDeleteClient}
        />
      ))}
      <button onClick={handleAddClient}>Add Client</button>
    </div>
  );
};

export default ClientList;
