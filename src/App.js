import React, { useState } from "react";
import "./App.css";
import Client from "./components/client";

function App() {
  const [clients, setClients] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      location: "City A",
      appointments: [
        {
          firstName: "John",
          lastName: "Doe",
          location: "City A",
          dateTime: "2023-12-10T10:00",
        },
        {
          firstName: "John",
          lastName: "Doe",
          location: "City A",
          dateTime: "2023-12-12T15:30",
        },
      ],
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      location: "City B",
      appointments: [
        {
          firstName: "Jane",
          lastName: "Smith",
          location: "City B",
          dateTime: "2023-12-11T09:15",
        },
      ],
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [newClient, setNewClient] = useState({
    firstName: "",
    lastName: "",
    location: "",
  });

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleAddClient = () => {
    if (
      newClient.firstName.trim() === "" ||
      newClient.lastName.trim() === "" ||
      newClient.location.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newClientId = clients.length + 1;
    const clientToAdd = {
      id: newClientId,
      ...newClient,
      appointments: [],
    };

    setClients((prevClients) => [...prevClients, clientToAdd]);
    setNewClient({
      firstName: "",
      lastName: "",
      location: "",
    });
    setModalOpen(false);
  };

  const editClientAppointments = (clientId, editedAppointments) => {
    const updatedClients = clients.map((client) => {
      if (client.id === clientId) {
        return { ...client, appointments: editedAppointments };
      }
      return client;
    });

    setClients(updatedClients);
  };

  const deleteClient = (clientId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this client?"
    );
    if (shouldDelete) {
      const updatedClients = clients.filter((client) => client.id !== clientId);
      setClients(updatedClients);
    }
  };

  return (
    <div className="App">
      <h1>Fitness Trainer Appointments</h1>
      {clients.map((client) => (
        <Client
          key={client.id}
          client={client}
          onEditAppointments={editClientAppointments}
          deleteClient={deleteClient}
        />
      ))}
      <button onClick={toggleModal}>Add new client</button>

      {isModalOpen && (
        <div className="modal">
          <h2>Add New Client</h2>
          <label>First Name:</label>
          <input
            type="text"
            value={newClient.firstName}
            onChange={(e) =>
              setNewClient((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
          <label>Last Name:</label>
          <input
            type="text"
            value={newClient.lastName}
            onChange={(e) =>
              setNewClient((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
          <label>Location:</label>
          <input
            type="text"
            value={newClient.location}
            onChange={(e) =>
              setNewClient((prev) => ({ ...prev, location: e.target.value }))
            }
          />
          <button onClick={handleAddClient}>Add Client</button>
        </div>
      )}
    </div>
  );
}

export default App;
