import { Component } from "react";
import axios from 'axios';
import "./index.css";

class Register extends Component {
  state = { name: "", password: "", email: "", repassword: "" };

  getName = (event) => {
    this.setState({ name: event.target.value });
  };

  getPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  getEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  getReEnterPassword = (event) => {
    this.setState({ repassword: event.target.value });
  };

  onClickRegistor = (event) => {
    const { name, email, password, repassword } = this.state;
    const { history } = this.props;
    event.preventDefault();
    if (name && email && password && password === repassword) {
      axios
        .post("http://localhost:3002/register", {name, email, password})
        .then((res) => {console.log(res);history.push("/login");})
        .catch((err) => console.log(err));
      
    } else {
      history.push("/register");
    }
  };

  render() {
    const { name, password, email, repassword } = this.state;

    return (
      <div className="form-container">
        <form className="login-container" onSubmit={this.onClickRegistor}>
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
              onChange={this.getName}
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
              onChange={this.getEmail}
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
              onChange={this.getPassword}
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
              onChange={this.getReEnterPassword}
              placeholder="Re Enter password"
            />
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
