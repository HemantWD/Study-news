import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default class Navbar1 extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand to="#">Study News</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link className="nav-link" to="/General">
                  Home
                </Link>
                <Link className="nav-link" to="/Business">
                  Business
                </Link>
                <Link className="nav-link" to="/Entertainment">
                  Entertainment
                </Link>
                <Link className="nav-link" to="/General">
                  General
                </Link>
                <Link className="nav-link" to="/Health">
                  Health
                </Link>
                <Link className="nav-link" to="/Science">
                  Science
                </Link>
                <Link className="nav-link" to="/Sports">
                  Sports
                </Link>
                <Link className="nav-link" to="/Technology">
                  Technology
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
