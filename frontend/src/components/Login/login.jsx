import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./login.module.css";

export default function Login() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({
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

  const login = () => {
    axios
      .post("https://sleepy-forest-35500.herokuapp.com/user/login", userdata)
      .then((res) => {
        console.log(res);
        localStorage.setItem("getharvesttoken", res.data.token);
        navigate("/time");
      })
      .catch((err) => {
        console.log(err.response.data);
        setError(true);
      });
  };

  const google = () => {
    window.open("http://localhost:8080/user/auth/google", "_self");
  };

  return (
    <div>
      <h1>Sign in to Harvest</h1>
      {error && <p style={{ color: "red" }}>Incorrect Email or Password</p>}
      <div className={Styles.mainlogindiv}>
        <button onClick={google}>Sign in with google</button>
        <br />
        <p>---- or with your email below ---</p>
        <input
          type="text"
          placeholder="Work email"
          name="email"
          onChange={handlechange}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={handlechange}
        />
        <br />
        <br />
        <button onClick={login} className={Styles.loginsubmitbtn}>
          Sign in
        </button>
      </div>
    </div>
  );
}
