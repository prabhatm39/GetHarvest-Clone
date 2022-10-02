import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LastStepStyle.css";

export default function LastStep() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    role: "",
    industry: "",
    via: ""
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };
  console.log(data);
  const location = useLocation();
  let { email } = location.state;
  console.log(email);
  const submit = () => {
    axios
      .put(`https://sleepy-forest-35500.herokuapp.com/user/edit/${email}`, data)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="lastmain">
        <h1>Last step…</h1>
        <h3>What’s your role? </h3>
        <input
          type="text"
          placeholder="e.g. Project Manager, CEO,Operations,etc."
          name="role"
          onChange={handlechange}
        />
        <h3>What’s your primary industry?</h3>
        <select id="" name="industry" onChange={handlechange}>
          <option value="select your Industry...">
            select your Industry...
          </option>
          <option value="Accounting">Accounting</option>
          <option value="Architecture">Architecture</option>
          <option value="Education">Education</option>
          <option value="Marketing">Marketing</option>
          <option value="Web Designing">Web Designing</option>
          <option value="others">others</option>
        </select>
        <h3>How did you hear about us?</h3>
        <input
          type="text"
          placeholder="e.g. a friend,podcast,social media,etc."
          name="via"
          onChange={handlechange}
        />
        <br />
        <br />
        <button onClick={submit}>Done!Take me to my account</button>
      </div>
    </div>
  );
}
