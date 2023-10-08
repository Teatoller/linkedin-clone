import React, { useState } from "react";
import "../Sass/LoginComponent.scss";
import { LoginApi } from "../api/AuthApi";

export default function LoginComponent() {
  const [credentails, setCredentials] = useState({});

  const login = async () => {
    try {
      await LoginApi(credentails.email, credentails.password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-wrapper-inner">
        <h1>Login</h1>
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
        <button className="login-btn" onClick={login}>
          Sign In
        </button>
      </div>
    </div>
  );
}
