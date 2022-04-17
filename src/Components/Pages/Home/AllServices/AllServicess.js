import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/Firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import Services from "../Services/Services";

const AllServicess = () => {
  const [services, setServices] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  console.log(services);
  return (
    <div className="container ">
      <h1 className="text-center mt-5">Our Services</h1>
      <div className="row g-5 mx-5 mx-sm-0">
        {services.map((service) => (
          <Services key={service.id} service={service}></Services>
        ))}
      </div>
    </div>
  );
};

export default AllServicess;
