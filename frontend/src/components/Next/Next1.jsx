import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./NextStyles.css";

export default function Next1() {
  const navigate = useNavigate();
  const [team, setTeam] = useState("");
  const location = useLocation();
  let { email } = location.state;
  console.log(email);
  //console.log(team)
  const next = () => {
    axios
      .put(`https://sleepy-forest-35500.herokuapp.com/user/edit/${email}`, { team })
      .then((res) => {
        console.log(res);
        navigate("/last", { state: { email: email } });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="nextmain">
        <h1>Welcome to Harvest</h1>
        <h4>We just have a few quick questions to set up your account…</h4>
        <br />
        <h5>First, about how many people will be using Harvest?</h5>
        <select   name="teamsize" id="" onChange={(e) => setTeam(e.target.value)}>
          <option value="default1">Select a team size</option>
          <option value="only me">Only me</option>
          <option value="2">2</option>
          <option value="3-9">3-9</option>
          <option value="10-19">10-19</option>
          <option value="20+">20+</option>
        </select>
        <br />
        <br />
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}
