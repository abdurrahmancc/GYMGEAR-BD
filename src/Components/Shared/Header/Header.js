import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
        <Container>
          <Navbar.Brand href="#home">
            <Link className="text-decoration-none me-3 text-white" to={"/"}>
              PHOTOGRAPHY BD
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className="text-decoration-none me-3 text-white" to="/home">
                Home
              </Link>
              <Link className="text-decoration-none me-3 text-white" to="/about">
                About
              </Link>
              <Link className="text-decoration-none me-3 text-white" to="/blogs">
                Blogs
              </Link>
              <Link className="text-decoration-none me-3 text-white" to="/login">
                Log In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
