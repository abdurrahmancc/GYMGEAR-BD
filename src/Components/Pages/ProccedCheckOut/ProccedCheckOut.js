import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";

const ProccedCheckOut = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const product = services.find((data) => data.id == id);
  console.log(product);
  // const { img, name, packages, quantity, camera, service, description } = product;

  return (
    <div className="container">
      <div className="w-50 mx-auto">
        <h1>hello </h1>
        {/* <h4>{packages}</h4> */}
        {/* <img src={product.img} alt="" /> */}
        <ul>
          {/* <li>{name}</li> */}
          {/* <li>{quantity}</li> */}
          {/* <li>{camera}</li> */}
          {/* <li>{service}</li> */}
          {/* <li>{description}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default ProccedCheckOut;
