import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../../Shared/Loading/Loading";

const About = () => {
  const [user, loading, hooksError] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1>this is about pages</h1>
    </div>
  );
};

export default About;
