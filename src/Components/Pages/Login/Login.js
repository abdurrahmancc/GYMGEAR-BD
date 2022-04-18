import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import google from "../../../images/social/google-logo.png";
import github from "../../../images/social/github.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { async } from "@firebase/util";
import Loading from "../../Shared/Loading/Loading";
import toast from "react-hot-toast";

const Login = () => {
  const [user, loading, hooksError] = useAuthState(auth);
  const [signInWithGoogle, signInGoogleUser, signInGoogleloading, error] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, logInUser, logInLoading, logInError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const handleWithGoogle = async () => {
    await signInWithGoogle();
    toast.success("success");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
    if (logInError) {
      toast.error("Incorrect username or password.", { id: "logInError" });
    }
  };

  const handleResetPassword = async () => {
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };
  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div style={{ height: "88vh" }} className="container d-flex">
      <div className="w-50 mx-auto my-auto">
        <h1>please login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <p className="text-end">
            <button
              onClick={() => handleResetPassword()}
              className="btn btn-link text-decoration-none  p-0"
            >
              Forgot your password?
            </button>
          </p>
          {logInLoading && <p>Loading...</p>}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="mt-3">
          <p>
            Don't have an account?
            <Link className="text-decoration-none " to={"/register"}>
              {" "}
              Please Register
            </Link>
          </p>
        </div>
        <div className="d-flex align-content-center">
          <hr className="w-50 text-dark"></hr>
          <p className="px-3 text-black fw-bolder">or</p>
          <hr className="w-50 text-dark"></hr>
        </div>
        <div>
          <button
            onClick={() => handleWithGoogle()}
            className="py-2 my-3 w-100 bg-body rounded rounded-pill border-1"
          >
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

export default Login;
