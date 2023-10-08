import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { RegisterApi } from "../api/AuthApi";
import LinkedinLogo from '../assets/LinkedinLogo.png'

export default function RegisterComponent() {
  const [credentails, setCredentials] = useState({});
  let navigate = useNavigate();

  const register = async () => {
    try {
      await RegisterApi(credentails.email, credentails.password);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" />
      <div className="login-wrapper-inner">
        <h1>Register</h1>
        <h1 className="heading">Make the most of your professional life</h1>
        <div className="login-input">
          <input
            type="email"
            placeholder="Email"
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            className="common-input"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            className="common-input"
          />
        </div>
        <button className="login-btn" onClick={register}>
          Agree & Join
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          Already on LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
