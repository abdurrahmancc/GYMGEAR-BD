import React from "react";
import { Button, Card } from "react-bootstrap";

const Services = ({ product }) => {
  const { price, quantity, camera, service, extra, description } = product;
  return (
    <div className="col-md-3 ">
      <h1 className="text-center">hello</h1>
      <div>
        {/* <h4>{packages}</h4> */}
        <div>
          <li>{price}</li>
          <li>{quantity}</li>
          <li>{camera}</li>
          <li>{service}</li>
          <li>{extra}</li>
        </div>
      </div>
    </div>
  );
};

export default Services;
