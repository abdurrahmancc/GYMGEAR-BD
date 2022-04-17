import React from "react";
import { Link } from "react-router-dom";

const Services = (props) => {
  const { id, name, price, packages, quantity, camera, service } = props.service;
  return (
    <div className="col-md-4 col-sm-6 ">
      <h1>hello hi by by</h1>
      <div>
        <li>{name}</li>
        <li>{price}</li>
        <li>{packages}</li>
        <li>{camera}</li>
        <Link to={"/checkout/" + id}>
          <button className="btn btn-primary mt-3 w-100">ProccedCheckOut</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
