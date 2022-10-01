import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Manage.css";

export default function Manage() {
  const [error, setError] = useState(false);
  const token = localStorage.getItem("getharvesttoken");
  const [client, setClient] = useState([]);

  const getClient = () => {
    axios
      .get("http://localhost:8080/client", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res);
        setClient(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  useEffect(() => {
    getClient();
  }, []);

  return (
    <div>
      {error && <p>You are not authorized</p>}
      <div className="managemaindiv">
        <h1>Clients</h1>
        <Link to="/addclient">
          <button className="newclientbtn">+ New Client</button>
        </Link>
        <button className="addcontactbtn">+ Add Contact</button>
        <select name="" id="" className="addcontactbtn">
          <option value="Import/Export">Import/Export</option>
          <option value="Import Contacts from CSV">
            Import Contacts from CSV
          </option>
          <option value="Export Client to Excel">Export Client to Excel</option>
          <option value="Export Contacts to Excel">
            Export Contacts to Excel
          </option>
        </select>
        <br />
        <input type="text" placeholder="Filter by client or contact" />
        <br />
        {client &&
          client.map((e) => (
            <div key={e._id} className="clientpanel">
              <button>Edit</button>
              <h3>{e.clientName}</h3>
              <button className="manageaddcontact">+ Add Contact</button>
            </div>
          ))}
      </div>
    </div>
  );
}
