import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../Styles/Header.css"
const Header = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold fs-2 text-muted">
            Car-Deal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="fw-bold">Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs" className="fw-bold">Blogs</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/signup">
                <button className="Sign-Login">Signup</button>
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <button className="Sign-Login">Login</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;