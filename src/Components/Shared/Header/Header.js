import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import "./Header.css";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [user, loading, hooksError] = useAuthState(auth);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg=""
        sticky="top"
        className="nvaber-color"
        variant="dark"
      >
        <Container className="py-2">
          <Navbar.Brand href="#home">
            <Link className="text-decoration-none me-3 text-white" to={"/"}>
              PHOTOGRAPHY BD
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto align-items-center">
              <div>
                <Link className="text-decoration-none me-3 text-white" to="/home">
                  Home
                </Link>
                <Link className="text-decoration-none me-3 text-white" to="/about">
                  About
                </Link>
                <Link className="text-decoration-none me-3 text-white" to="/blog">
                  Blogs
                </Link>
                {user?.uid ? (
                  <button
                    onClick={() => signOut(auth)}
                    className="btn btn-link text-decoration-none border-0 p-0 text-white"
                  >
                    Log Out
                  </button>
                ) : (
                  <Link className="text-decoration-none me-3 text-white " to="/login">
                    Log In
                  </Link>
                )}
              </div>
              <div>
                {user?.photoURL ? (
                  <img
                    width={"40px"}
                    className="rounded-circle border-white border ms-2 border-2"
                    src={user?.photoURL}
                    alt=""
                    srcset=""
                  />
                ) : (
                  <FaUserCircle className="text-white fs-3" />
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
