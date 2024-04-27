import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./login.css";

const Login = ({ history }) => {
  const [passShow, setPassShow] = useState(false);
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const setVal = (event) => {
    const { name, value } = event.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const onClickSubmit = async (event) => {
    const { email, password } = inpval;
    event.preventDefault();
    if (email === undefined) {
      alert("please enter your email");
    } else if (!email.includes("@")) {
      alert("please enter valid email");
    } else if (password === undefined) {
      alert("please enter your password");
    } else if (password.length < 6) {
      alert("please enter valid password");
    } else {
      const data = await fetch("http://localhost:8090/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const res = await data.json();
      if (res.userExists) {
        if (res.status === 200) {
          Cookies.set("jwt_token", res.token);
          setInpval({ ...inpval, email: "", password: "" });
          history.replace("/");
        }
      } else {
        history.replace("/register");
      }
    }
  };

  return (
    <div className="form-container">
      <form className="login-container">
        <h1 className="header">Login</h1>
        <div className="login-input-field">
          <input
            type="text"
            id="email"
            className="login-input"
            name="email"
            value={inpval.email}
            onChange={setVal}
            placeholder=""
            required="true"
          />
          <label htmlFor="email" className="login-labels">
            Username
          </label>
        </div>
        <div className="login-input-field">
          <input
            type={!passShow ? "password" : "text"}
            id="password"
            name="password"
            value={inpval.password}
            className="login-input"
            onChange={setVal}
            required="true"
          />
          <label htmlFor="email" className="login-labels">
            Password
          </label>
          <button
            type="button"
            onClick={() => setPassShow(!passShow)}
            className="show-hide-pbtn"
          >
            {!passShow ? "Show" : "Hide"}
          </button>
        </div>
        <button type="submit" className="submit-btn" onClick={onClickSubmit}>
          Login
        </button>

        <p className="suggestion">
          Don't have an Account?{" "}
          <Link to="/register" className="link">
            Register
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
