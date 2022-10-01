import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Addclient.css";

export default function Addclient() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const token = localStorage.getItem("getharvesttoken");
  const [userdata, setUserdata] = useState({
    clientName: "",
    address: "",
    pCurrency: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserdata({
      ...userdata,
      [name]: value
    });
  };
  //console.log(userdata);

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/client/create", userdata, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res);
        navigate("/manage");
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <div>
      <div className="addclientmaindiv">
        {error && <p> please Login</p>}
        <h1>New Client</h1>
        <p className="headingp">
          Once you’ve added a client, you can add projects and contacts.
        </p>
        <div className="clientnamesec">
          <p>Client Name</p>
          <input type="text" name="clientName" onChange={handleChange} />
        </div>
        <div className="clientaddrsec">
          <p>Addres</p>
          <input type="text" name="address" onChange={handleChange} />
        </div>
        <br />
        <div className="currencysec">
          <p>Preffered currency</p>
          <select name="pCurrency" id="" onChange={handleChange}>
            <option value="Account default (United States Dollar)">
              Account default (United States Dollar)
            </option>
            <option value="Euro-EUR">Euro-EUR</option>
            <option value="British Pound-GBP">British Pound-GBP</option>
            <option value="Australian Dollar-AUD">Australian Dollar-AUD</option>
            <option value="Japanese Yen- JAY">Japanese Yen- JAY</option>
          </select>
        </div>

        <br />
        <br />
        <button onClick={handleSubmit} className="saveclientbtn">
          Save Client
        </button>
        <Link to="/manage">
          <button className="cancelbtn">Cancel</button>
        </Link>
      </div>
    </div>
  );
}
