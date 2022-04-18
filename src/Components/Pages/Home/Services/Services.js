import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Services = ({ service }) => {
  const { id, day, price, packages, serviceA, serviceB, serviceC, serviceD, serviceE, serviceF } =
    service;
  return (
    <div className="col-md-4 col-sm-6  ">
      <div>
        <Card
          style={{ maxWidth: "20rem", minWidth: "15rem" }}
          className="mx-auto text-center bg-info"
        >
          <Card.Body>
            <Card.Title className="fw-bold fs-3">{packages}</Card.Title>
            <span className="fs-1 ">{price}</span>
            <br />
            <span className="fs-5 ">{day}</span>
            <Card.Text>
              <p>{serviceB}</p>
              <p>{serviceA}</p>
              <p>{serviceC}</p>
              <p>{serviceD}</p>
              <p>{serviceE}</p>
              <p>{serviceF}</p>
            </Card.Text>

            <Link to={"/checkout/" + id}>
              <button style={{ backgroundColor: "#120E43" }} className="btn mt-3 text-white w-50">
                Check Out <FaAngleRight />
              </button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Services;
