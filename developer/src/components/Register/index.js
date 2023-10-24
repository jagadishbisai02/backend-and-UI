import { useState } from "react";
import "./index.css";

const Register = (props) => {
  const { history } = props;

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
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

  const onClickRegistor = async (event) => {
    event.preventDefault();
    const { fname, email, password, cpassword } = inpval;

    if(fname === ""){
      alert("please enter your name")
    }else if(email === ""){
      alert("please enter your email")
    }else if(!email.includes("@")){
      alert("please enter valid email")
    }else if(password === ""){
      alert("please enter your password")
    }else if(password.length < 6){
      alert("please enter valid password")
    }else if(cpassword === ""){
      alert("please enter your password")
    }else if(cpassword.length < 6){
      alert("please enter valid password")
    }else if(password !== password){
      alert("password and confirm password not match")
    }else{
      const data = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({fname, email, password, cpassword}),
      });
      const res = await data.json();
      console.log(res)
    }
  };

  return (
    <div className="form-container">
      <form className="login-container" onSubmit={onClickRegistor}>
        <h1 className="header">Register</h1>
        <div className="userfield">
          <label htmlFor="fname" className="labels">
            Username:
          </label>
          <input
            type="text"
            id="fname"
            className="inputs"
            name="fname"
            value={inpval.fname}
            onChange={setVal}
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
            name="email"
            value={inpval.email}
            onChange={setVal}
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
            name="password"
            value={inpval.password}
            onChange={setVal}
            placeholder="password"
          />
        </div>
        <div className="reEnterPasswordfield">
          <label htmlFor="cpassword" className="labels">
            Re Enter Password:
          </label>
          <input
            type="password"
            id="cpassword"
            className="inputs"
            name="cpassword"
            value={inpval.cpassword}
            onChange={setVal}
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
