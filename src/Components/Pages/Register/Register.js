import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";
import google from "../../../images/social/google-logo.png";
import github from "../../../images/social/github.png";

const Register = () => {
  return (
    <div style={{ height: "88vh" }} className="container d-flex">
      <div className="w-50 mx-auto my-auto">
        <h1 className="text-center mb-5">please Register</h1>
        <Form>
          <Form.Label> Your full name</Form.Label>
          <Form.Control
            className="inputcolor mb-4"
            type="text"
            placeholder="Enter your full name"
          />

          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="inputcolor mb-4"
            type="email"
            placeholder="Enter your email address"
          />

          <Form.Label>Password</Form.Label>
          <Form.Control className=" mb-2" type="password" placeholder="Password" />
          <p className="text-end">
            <button className="btn btn-link text-decoration-none  p-0">
              Forgot your password?
            </button>
          </p>
          <Form.Check className=" mb-3 " type="checkbox" label="Check me out" />

          <Button className="  mb-4" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div>
          <p>
            Don't have an account?
            <Link className="text-decoration-none" to={"/login"}>
              {" "}
              Please Login
            </Link>
          </p>
        </div>
        <div className="d-flex align-content-center">
          <hr className="w-50 text-dark"></hr>
          <p className="px-3 text-black fw-bolder">or</p>
          <hr className="w-50 text-dark"></hr>
        </div>
        <div>
          <button className="py-2 mb-3 w-100 bg-body rounded rounded-pill border-1">
            <img src={google} alt="" /> CONTINUE WITH GOOGLE
          </button>
          <button className="py-2 w-100 bg-body rounded rounded-pill border-1">
            <img src={github} alt="" /> CONTINUE WITH GITHUB
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
