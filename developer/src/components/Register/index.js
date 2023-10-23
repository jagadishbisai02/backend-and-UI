import {useState } from "react";
import axios from "axios";
import "./index.css";

const Register = props => {
  const {history} = props
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  console.log(name, email, password, repassword);

  const onClickRegistor = (event) => {
    const data = { name, email, password };
    event.preventDefault();
    if (name && email && password && password === repassword) {
      axios.post("http://localhost:3001/register", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          console.log(res.data);
          history.push("/login");
        })
        .catch((err) => {
          // if (err.response) {
          //   console.log(err.response.data);
          //   console.log(err.response.status);
          //   console.log(err.response.headers);
          // } else if (err.request) {
          //   // The request was made but no response was received
          //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          //   // http.ClientRequest in node.js
          //   console.log(err.request);
          // } else {
          //   console.log("Error", err.message);
          // }
          console.log(err.toJSON().message);
        });
    } else {
      history.push("/register");
    }
  };

  return (
    <div className="form-container">
      <form
        className="login-container"
        onSubmit={onClickRegistor}
        action="POST"
      >
        <h1 className="header">Register</h1>
        <div className="userfield">
          <label htmlFor="userName" className="labels">
            Username:
          </label>
          <input
            type="text"
            id="userName"
            className="inputs"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="username"
          />
        </div>
        <div className="emailField">
          <label htmlFor="email" className="labels">
            Email:
          </label>
          <input
            type="text"
            id="email"
            className="inputs"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="abc@gmail.com"
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
        <div className="reEnterPasswordfield">
          <label htmlFor="reEnterPassword" className="labels">
            Re Enter Password:
          </label>
          <input
            type="password"
            id="reEnterPassword"
            className="inputs"
            value={repassword}
            onChange={(event) => setRepassword(event.target.value)}
            placeholder="Re Enter password"
          />
        </div>
        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
