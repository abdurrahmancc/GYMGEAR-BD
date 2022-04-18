import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";

const ProccedCheckOut = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    // fetch(process.env.PUBLIC_URL + "/service.json")
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const product = services.find((data) => data.id == id);
  console.log(product);

  return (
    <div className="container">
      <div className="w-50 mx-auto">
        <div>
          <h4 className="text-center mt-5 fw-bold mb-3 ">{product?.packages}</h4>
          <div className="d-flex justify-content-center">
            <img className="w-50" src={product?.img} alt="" />
          </div>
          <div className="text-center">
            <p>{product?.serviceB}</p>
            <p>{product?.serviceA}</p>
            <p>{product?.serviceC}</p>
            <p>{product?.serviceD}</p>
            <p>{product?.serviceE}</p>
            <p>{product?.serviceF}</p>
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProccedCheckOut;
