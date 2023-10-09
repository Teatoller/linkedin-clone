import React, { useEffect, useState } from "react";
import HomeComponent from "../components/HomeComponent";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { authentication } from "../firebasConfig";
import Loader from "../components/common/Loader";

export default function Home() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(authentication, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      }
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading && <Loader />}
      <HomeComponent />
    </>
  );
}
