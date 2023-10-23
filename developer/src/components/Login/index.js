import {useState } from "react";
import axios from "axios";
import "./index.css";

const Login = (props) => {
  const { history } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickSubmit = (event) => {
    const data = { email: email, password: password };
    event.preventDefault();
    if (email !== undefined && password !== undefined) {
      axios.post("http://localhost:3001/login", data).then((response) => {
        console.log(response.data);
      });
      history.push("/login");
    } else {
      history.push("/");
    }
  };

  return (
    <div className="form-container">
      <form className="login-container" onClick={onClickSubmit}>
        <h1 className="header">Login</h1>
        <div className="userfield">
          <label htmlFor="userName" className="labels">
            Username:
          </label>
          <input
            type="text"
            id="userName"
            className="inputs"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="username"
          />
        </div>
        <div className="passwordfield">
          <label htmlFor="password" className="labels">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="inputs"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="password"
          />
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
