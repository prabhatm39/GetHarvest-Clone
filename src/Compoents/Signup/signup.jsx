import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Leftdiv from "../Assets/left-div.jpg";
import "../styles.css";

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errormessege, setErrormessage] = useState("");
  const [userdata, setUserdata] = useState({
    fname: "",
    lname: "",
    cname: "",
    email: "",
    password: ""
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUserdata({
      ...userdata,
      [name]: value
    });
  };
  //console.log(userdata)
  const signup = () => {
    const { fname, lname, cname, email, password } = userdata;
    if (
      fname == "" ||
      lname == "" ||
      cname == "" ||
      email == "" ||
      password == ""
    ) {
      setError(true);
    } else {
      axios
        .post("http://localhost:8080/user/signup", userdata)
        .then((res) => {
          console.log(res);
          navigate("/next1", { state: { email: userdata.email } });
        })
        .catch((err) => setErrormessage(err.response.data));
    }
  };
  const google = () => {
    window.open("http://localhost:8080/user/auth/google", "_self");
  };
  return (
    <div>
      <div className="mainsigndiv">
        <div>
          <img src={Leftdiv} alt="leftdiv" />
        </div>
        <div className="rightsigndiv">
          <h1>Get a FREE Trial</h1>
          {errormessege && (
            <p
              style={{ color: "red" }}
            >{`We’ve seen ${userdata.email} used to sign in to Harvest or Forecast before.
          Please sign in first to continue creating your new Harvest account.`}</p>
          )}
          <p>No credit card required</p>
          <button onClick={google} className="googlebutton">
            {" "}
            Sign up with google
          </button>
          <p>or with your email below</p>
          <br />
          <div className="inputfield">
            <input
              type="text"
              placeholder="First name"
              name="fname"
              onChange={handlechange}
            />
            <input
              type="text"
              placeholder="Last name"
              name="lname"
              onChange={handlechange}
            />
            <br />
            <input
              type="text"
              placeholder="Company name"
              name="cname"
              onChange={handlechange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handlechange}
            />
            <br />
            <input
              type="text"
              placeholder="password"
              name="password"
              onChange={handlechange}
            />
          </div>

          <br />
          {error && <p style={{ color: "red" }}>all fields are mandatory</p>}
          <button onClick={signup} className="createmyaccount">
            Create My account
          </button>
          <p>Already a customer? Sign in</p>
          <p style={{ color: "gray", fontSize: "12px" }}>
            By creating an account, you agree to the Harvest{" "}
            <a
              style={{ color: "gray" }}
              href="https://www.getharvest.com/terms-of-service"
            >
              Terms of service
            </a>{" "}
            and{" "}
            <a href="" style={{ color: "gray" }}>
              Privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
