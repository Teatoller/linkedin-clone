import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { LoginApi } from "../api/AuthApi";
import LinkedinLogo from "../assets/LinkedinLogo.png";
import GoogleButton from "react-google-button";

export default function LoginComponent() {
  const [credentails, setCredentials] = useState({});
  let navigate = useNavigate();

  const login = async () => {
    try {
      await LoginApi(credentails.email, credentails.password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" />
      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional world</p>
        <div className="login-input">
          <input
            type="email"
            placeholder="Email or Phone"
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
        <button className="login-btn" onClick={login}>
          Sign In
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <GoogleButton
        className="google-btn"
          type="dark" // can be light or dark
          onClick={() => {
            console.log("Google button clicked");
          }}
        />
        <p className="go-to-signup">
          New to LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
    </div>
  );
}
