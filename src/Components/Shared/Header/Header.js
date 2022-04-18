import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import "./Header.css";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
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
            <Link className="text-decoration-none me-3 fw-bold text-white" to={"/"}>
              PHOTOGRAPHY BD
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto align-items-center">
              <div>
                <NavLink
                  to={"/home"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-bottom pb-2  border-white active-border fs-5 mx-2 fw-bolder text-decoration-none"
                      : "text-white mx-2 fs-5 unActive-border text-decoration-none"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/checkout"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-bottom pb-2  border-white active-border fs-5 mx-2 fw-bolder text-decoration-none"
                      : "text-white mx-2 fs-5 unActive-border text-decoration-none"
                  }
                >
                  CheckOut
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-bottom pb-2  border-white active-border fs-5 mx-2 fw-bolder text-decoration-none"
                      : "text-white mx-2  unActive-border text-decoration-none"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-bottom pb-2  border-white active-border fs-5 mx-2 fw-bolder text-decoration-none"
                      : "text-white mx-2  unActive-border text-decoration-none"
                  }
                  to="/blog"
                >
                  Blogs
                </NavLink>
                {user?.uid ? (
                  <button
                    onClick={() => signOut(auth)}
                    className="btn btn-link text-decoration-none border-0 p-0 text-white"
                  >
                    Log Out
                  </button>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-white border-bottom pb-2  border-white active-border fs-5 mx-2 fw-bolder text-decoration-none"
                        : "text-white mx-2  unActive-border text-decoration-none"
                    }
                    to="/login"
                  >
                    LogIn
                  </NavLink>
                )}
              </div>
              <div>
                {user?.photoURL ? (
                  <img
                    width={"40px"}
                    className="rounded-circle border-white border ms-2 border-2"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <FaUserCircle className="text-white ms-2 fs-3" />
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
