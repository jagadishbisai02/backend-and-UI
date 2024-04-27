import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = ({ history }) => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCpassShow] = useState(false);
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

    if (fname === "") {
      alert("please enter your name");
    } else if (email === "") {
      alert("please enter your email");
    } else if (!email.includes("@")) {
      alert("please enter valid email");
    } else if (password === "") {
      alert("please enter your password");
    } else if (password.length < 6) {
      alert("please enter valid password");
    } else if (cpassword === "") {
      alert("please enter your password");
    } else if (cpassword.length < 6) {
      alert("please enter valid password");
    } else if (password !== cpassword) {
      alert("password and confirm password not match");
    } else {
      const data = await fetch("http://localhost:8090/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ fname, email, password, cpassword }),
      });
      const res = await data.json();
      // console.log(res)

      if (res.status === 201) {
        alert("user registration done");
        setInpval({
          ...inpval,
          fname: "",
          email: "",
          password: "",
          cpassword: "",
        });
        history.replace("/login");
      }
    }
  };

  return (
    <div className="form-container">
      <form className="register-container" onSubmit={onClickRegistor}>
        <h1 className="header">Register</h1>
        <div className="register-input-field">
          <input
            type="text"
            id="fname"
            className="inputs"
            name="fname"
            value={inpval.fname}
            onChange={setVal}
          />
          <label htmlFor="fname" className="labels">
            Username
          </label>
        </div>
        <div className="register-input-field">
          <input
            type="text"
            id="email"
            className="inputs"
            name="email"
            value={inpval.email}
            onChange={setVal}
          />
          <label htmlFor="email" className="labels">
            Email
          </label>
        </div>
        <div className="register-input-field">
          <input
            type={!passShow ? "password" : "text"}
            id="password"
            name="password"
            value={inpval.password}
            className="inputs"
            onChange={setVal}
          />
          <label htmlFor="password" className="labels">
            Password
          </label>
          <button
            type="button"
            onClick={() => setPassShow(!passShow)}
            className="register-show-hide-pbtn"
          >
            {!passShow ? "Show" : "Hide"}
          </button>
        </div>
        <div className="register-input-field">
          <input
            type={!cpassShow ? "password" : "text"}
            id="cpassword"
            name="cpassword"
            value={inpval.cpassword}
            className="inputs"
            onChange={setVal}
          />
          <label htmlFor="cpassword" className="labels">
            Confirm Password
          </label>
          <button
            type="button"
            onClick={() => setCpassShow(!cpassShow)}
            className="register-show-hide-pbtn"
          >
            {!cpassShow ? "Show" : "Hide"}
          </button>
        </div>
        <button type="submit" className="submit-btn">
          Register
        </button>

        <p className="suggestion">
          Already have an account?{" "}
          <Link to="/login" className="link">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
