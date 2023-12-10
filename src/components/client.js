import React from "react";
import ClientInfo from "./clientInfo";
import Appointments from "./appointments";
import "./styles.css";

const Client = ({
  client,
  addAppointment,
  deleteClient,
  onEditInfo,
  onEditAppointments,
  deleteAppointment,
}) => {
  return (
    <div className="client-row">
      <ClientInfo
        {...client}
        onEdit={onEditInfo}
        addAppointment={() => addAppointment(client.id)}
      />
      <Appointments
        appointments={client.appointments}
        addAppointment={() => addAppointment(client.id)}
        onEdit={onEditAppointments}
        deleteAppointment={(appointmentIndex) =>
          deleteAppointment(client.id, appointmentIndex)
        }
      />
      <button onClick={() => deleteClient(client.id)}>Delete Client</button>
    </div>
  );
};

export default Client;
