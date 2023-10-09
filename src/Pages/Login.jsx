import React, { useEffect, useState } from "react";
import LoginComponent from "../components/LoginComponent";
import { onAuthStateChanged } from "firebase/auth";
import { authentication } from "../firebasConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";

export default function Login() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(authentication, (res) => {
      if (res?.accessToken) {
        navigate("/home");
        setLoading(false);
      } else {
        navigate("/");
        setLoading(false);
      }
    });
  }, []);
  return (
    <>
      {loading && <Loader />}
      <LoginComponent />
    </>
  );
}
