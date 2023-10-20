import { Component } from "react";
import axios from "axios";
import "./index.css";

class Login extends Component {
  state = { username: "", password: "" };

  getUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  getPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onClickSubmit = (event) => {
    const {history} = this.props
    const { username, password } = this.state;
    const Details = {username, password}
    event.preventDefault();
    if (username !== undefined && password !== undefined) {
      axios.post('http://localhost:3002/users', Details)
      history.push('/')
    }else{
      history.push('/login')
    }
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="form-container">
        <form className="login-container">
          <h1 className="header">Login</h1>
          <div className="userfield">
            <label htmlFor="userName" className="labels">
              Username:
            </label>
            <input
              type="text"
              id="userName"
              className="inputs"
              value={username}
              onChange={this.getUsername}
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
              onChange={this.getPassword}
              placeholder="password"
            />
          </div>
          <button type="submit" className="submit-btn" onClick={this.onClickSubmit}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
