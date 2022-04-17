import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProccedCheckOut = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const service = services.find((data) => data.id === id);
  console.log(service);

  return (
    <div>
      <h1>hello ProccedCheckOut {id}</h1>
    </div>
  );
};

export default ProccedCheckOut;
