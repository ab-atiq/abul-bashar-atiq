import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./icon.jpg";
const Header = () => {
  const link = {
    padding: "10px",
    textDecoration: "none",
    fontSize: "20px",
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={logo} width="50px" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={link} className="text-danger" to="/home">
              Home
            </Link>
            <Link style={link} className="text-danger" to="/projects">
              Projects
            </Link>
            <Link style={link} className="text-danger" to="/contact">
              Contact
            </Link>
            <Link style={link} className="text-danger" to="/about">
              About
            </Link>
            <Link style={link} className="text-danger" to="/blogs">
              Blogs
            </Link>
          </Nav>
          <Nav>
            <a
              href="https://drive.google.com/file/d/1Zqq7_rKovSBRdRrgo1t0Kj8twh4iTwSO/view"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline-danger">RESUME</Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
