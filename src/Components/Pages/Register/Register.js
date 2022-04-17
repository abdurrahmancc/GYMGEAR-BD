import { sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "./Register.css";

const Register = () => {
  const [user, loading, hooksError] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [agree, setAgree] = useState(false);
  const [info, setInfo] = useState({ email: "", password: "", ConfirmPassword: "", name: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "", confirmPassword: "", general: "" });
  const [createUserWithEmailAndPassword, users, loadings, createUserError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  let from = location.state?.from?.pathname || "/";

  //handle input email
  const handleEmail = (inputeEail) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputeEail)) {
      setInfo({ ...info, email: inputeEail });
      setError({ ...error, email: "" });
    } else {
      setError({ ...error, email: "Invalid email......." });
    }
  };

  // error password handling
  const handlePassword = (inputPassword) => {
    if (/(?=.*?[#?!@$%^&*-])/.test(inputPassword)) {
      setInfo({ ...info, password: inputPassword });
      setError({ ...error, password: "" });
    } else {
      setError({ ...error, password: "Invalid Password........" });
    }
  };

  const handleConfirmPassword = (inputConfirmPassword) => {
    setInfo({ ...info, ConfirmPassword: inputConfirmPassword });
  };

  const handleSubmit = (e) => {
    if (info.password === info.ConfirmPassword) {
      createUserWithEmailAndPassword(info.email, info.password);
      setError({ ...error, confirmPassword: "" });
      toast("send varifide code please check your email");
      navigate(from, { replace: true });
    } else {
      setError({ ...error, confirmPassword: "your password not match" });
    }
    e.preventDefault();
  };
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div style={{ height: "88vh" }} className="container d-flex">
      <div className="w-50 mx-auto my-auto">
        <h1 className="text-center mb-5">please Register</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={(e) => handleEmail(e.target.value)}
            className="inputcolor mb-4"
            type="email"
            placeholder="Enter your email address"
          />
          {<span>{error?.email}</span>}

          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={(e) => handlePassword(e.target.value)}
            className=" "
            type="password"
            placeholder="Password"
          />
          {<p className="text-danger mb-4">{error?.password}</p>}

          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onBlur={(e) => handleConfirmPassword(e.target.value)}
            className=" mb-2 inputcolor"
            type="password"
            placeholder="Confirm Password"
          />
          {<p className="text-danger mb-4">{error?.confirmPassword}</p>}

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Check me out" />
          </Form.Group>

          <Button disabled={!agree} className="  mb-4" variant="primary" type="submit">
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
      </div>
    </div>
  );
};

export default Register;
