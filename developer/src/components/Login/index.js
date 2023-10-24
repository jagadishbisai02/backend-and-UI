import {useState } from "react";
import axios from "axios";
import "./index.css";

const Login = (props) => {
  const { history } = props;
  const [inpval, setInpval] = useState({
    email: "",
    password: ""
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

  const onClickSubmit = async(event) => {
    const {email, password} = inpval
    event.preventDefault();
    if(email === ""){
      alert("please enter your email")
    }else if(!email.includes("@")){
      alert("please enter valid email")
    }else if(password === ""){
      alert("please enter your password")
    }else if(password.length < 6){
      alert("please enter valid password")
    }else{
      const data = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });
      const res = await data.json();
      console.log(res)
    }
  };

  return (
    <div className="form-container">
      <form className="login-container" onClick={onClickSubmit}>
        <h1 className="header">Login</h1>
        <div className="userfield">
          <label htmlFor="email" className="labels">
            Username:
          </label>
          <input
            type="text"
            id="email"
            className="inputs"
            name="email"
            value={inpval.email}
            onChange={setVal}
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
            name="password"
            value={inpval.password}
            onChange={setVal}
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
