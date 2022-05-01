import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import "../../Styles/Header.css"
const Header = () => {
  const [user] = useAuthState(auth)
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
              {
                user ?
                  <span>
                    <Nav.Link as={Link} to="/inventory/manageProduct" className="fw-bold">Manage-Inventory</Nav.Link>
                  </span> :
                  <span>

                  </span>
              }
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/signup">
                <button className="Sign-Login">Signup</button>
              </Nav.Link>
              {!user ?
                <Nav.Link as={Link} to="/login">
                  <button className="Sign-Login">Login</button>
                </Nav.Link>
                :
                <Nav.Link>
                  <button className="Sign-Login" onClick={() => signOut(auth)}>Logout</button>
                </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;