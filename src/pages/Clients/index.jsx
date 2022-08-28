import { useState, useEffect } from "react";
import axios from "axios";
const Clients = () => {
const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
      setClients(data);
    };
    getClients()
  }, []);

  return (
    <div className="client">
      <h1>Clients page</h1>
      <ul className="client-list" >
        {clients.map((client) => (
          <li key={client.id} data-testid={`client-${client.id}`}>
            <p>Name : {client.name}</p>
            <p>Username : {client.username}</p>
            <p>Email : {client.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Clients;
