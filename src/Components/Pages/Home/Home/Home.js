import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/Firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import AllServicess from "../AllServices/AllServicess";
import Banner from "../Banner/Banner";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mb-5">
      <Banner></Banner>
      <AllServicess></AllServicess>
    </div>
  );
};

export default Home;
